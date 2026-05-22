import { createElement } from 'react'
import GlossaryTip from '../components/GlossaryTip'

/**
 * Known jargon terms. Each entry has:
 *   source  — RegExp source string (no flags) used to build per-run instances
 *   flags   — flags to apply (usually 'i' for case-insensitive, '' for exact)
 *   def     — plain-text definition shown in the tooltip
 */
const TERMS = [
  {
    source: String.raw`\bbraided?\s+funding\b|braiding\s+funding\b`,
    flags: 'i',
    def: 'Combining multiple funding sources — federal grants, state grants, fee-for-service revenue, and donations — into a single program budget. Each source is tracked separately for reporting, then "braided" together.',
  },
  {
    source: String.raw`\bfiscal\s+spons(?:or(?:ship)?|ored)\b`,
    flags: 'i',
    def: 'An arrangement where an established 501(c)(3) nonprofit manages grant funds on behalf of a newer project — allowing that project to receive restricted grants without forming its own nonprofit corporation.',
  },
  {
    source: String.raw`\bMOU\b`,
    flags: '',
    def: 'Memorandum of Understanding — a written agreement between organizations defining shared roles, responsibilities, contributions, and expectations for a partnership.',
  },
  {
    source: String.raw`\bCQI\b`,
    flags: '',
    def: 'Continuous Quality Improvement — a structured, ongoing cycle of data collection, staff reflection, and incremental adjustments to strengthen program quality over time.',
  },
  {
    source: String.raw`\b21st\s+CCLC\b`,
    flags: 'i',
    def: '21st Century Community Learning Centers — the largest federal grant program for afterschool and expanded learning programs, administered by each state\'s education agency.',
  },
  {
    source: String.raw`\bSEL\b`,
    flags: '',
    def: 'Social-Emotional Learning — the process of developing self-awareness, emotional regulation, relationship skills, and responsible decision-making in young people.',
  },
  {
    source: String.raw`\bCACFP\b`,
    flags: '',
    def: 'Child and Adult Care Food Program — USDA program that reimburses eligible afterschool programs for serving nutritious meals and snacks to youth through age 18.',
  },
  {
    source: String.raw`501\(c\)\(3\)`,
    flags: '',
    def: 'IRS designation for tax-exempt charitable nonprofit organizations. Many grants restrict eligibility to 501(c)(3) organizations; programs without this status can use a fiscal sponsor.',
  },
  {
    source: String.raw`\bfee-for-service\b`,
    flags: 'i',
    def: 'A revenue model where families pay program tuition or fees directly, as distinct from grant-funded programs that are free to families.',
  },
]

/**
 * Given a plain text string, returns either:
 *  - the original string (no terms matched), or
 *  - an array of strings and <GlossaryTip> React elements
 *
 * Safe to call with non-strings (returns the value unchanged).
 */
export function annotateText(text) {
  if (!text || typeof text !== 'string') return text

  // Process one term at a time, splitting text segments into smaller pieces
  let segments = [{ kind: 'text', value: text }]

  for (const { source, flags, def } of TERMS) {
    const next = []
    for (const seg of segments) {
      // Already-annotated term nodes pass through untouched
      if (seg.kind !== 'text') { next.push(seg); continue }

      const re = new RegExp(source, flags + 'g')
      const parts = []
      let last = 0
      let m

      while ((m = re.exec(seg.value)) !== null) {
        if (m.index > last) {
          parts.push({ kind: 'text', value: seg.value.slice(last, m.index) })
        }
        parts.push({ kind: 'term', value: m[0], def })
        last = m.index + m[0].length
      }
      if (last < seg.value.length) {
        parts.push({ kind: 'text', value: seg.value.slice(last) })
      }

      next.push(...(parts.length ? parts : [seg]))
    }
    segments = next
  }

  const hasTerms = segments.some(s => s.kind === 'term')
  if (!hasTerms) return text

  return segments.map((seg, i) => {
    if (seg.kind === 'text') return seg.value
    return createElement(GlossaryTip, { key: i, text: seg.value, definition: seg.def })
  })
}
