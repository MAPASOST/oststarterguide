import { useState } from 'react'
import styles from './Checklist.module.css'

function CheckIcon() {
  return (
    <svg
      className={styles.checkIcon}
      viewBox="0 0 12 9"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 4.5L4.5 8L11 1"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/**
 * Checklist — interactive phase-milestone tracker.
 *
 * Props:
 *   title     string    – optional heading above the checklist
 *   items     string[]  – milestone labels
 *   colorKey  string    – 'blue' | 'teal' | 'green'
 */
export default function Checklist({ title, items, colorKey }) {
  const [checked, setChecked] = useState(() => new Array(items.length).fill(false))

  const checkedCount = checked.filter(Boolean).length
  const total = items.length
  const pct = total > 0 ? Math.round((checkedCount / total) * 100) : 0
  const complete = checkedCount === total && total > 0

  function toggle(i) {
    setChecked(prev => prev.map((v, idx) => (idx === i ? !v : v)))
  }

  return (
    <div
      className={[
        styles.wrapper,
        styles[`color-${colorKey}`],
        complete ? styles.complete : '',
      ].join(' ')}
    >
      {complete && (
        <div className={styles.celebration} role="status" aria-live="polite">
          <span className={styles.celebrationIcon} aria-hidden="true">🎉</span>
          <span>All milestones reached — great work!</span>
        </div>
      )}

      <div className={styles.header}>
        {title && <h3 className={styles.title}>{title}</h3>}
        <span
          className={styles.pctBadge}
          aria-label={`${pct} percent complete`}
        >
          {pct}%
        </span>
      </div>

      <div
        className={styles.progressTrack}
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className={styles.progressFill} style={{ width: `${pct}%` }} />
      </div>

      <ul className={styles.list} role="list">
        {items.map((item, i) => (
          <li key={i}>
            <button
              className={[styles.item, checked[i] ? styles.itemChecked : ''].join(' ')}
              onClick={() => toggle(i)}
              aria-pressed={checked[i]}
            >
              <span className={styles.checkbox} aria-hidden="true">
                {checked[i] && <CheckIcon />}
              </span>
              <span className={styles.label}>{item}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
