import FundingExplorer from './FundingExplorer'
import styles from './ContentBlock.module.css'

/**
 * ContentBlock — renders a single content block based on its `type`.
 *
 * Supported types: text | tip | callout | list | checklist | resource | steps
 * See content.js for the full schema.
 *
 * Props:
 *   block     Block   – block object from content.js
 *   colorKey  string  – inherited phase color key
 */
export default function ContentBlock({ block, colorKey }) {
  switch (block.type) {
    case 'text':
      return <TextBlock block={block} />

    case 'tip':
      return <TipBlock block={block} colorKey={colorKey} />

    case 'callout':
      return <CalloutBlock block={block} />

    case 'list':
      return <ListBlock block={block} colorKey={colorKey} />

    case 'checklist':
      return <ChecklistBlock block={block} colorKey={colorKey} />

    case 'resource':
      return <ResourceBlock block={block} colorKey={colorKey} />

    case 'steps':
      return <StepsBlock block={block} colorKey={colorKey} />

    case 'fundingExplorer':
      return <FundingExplorer />

    default:
      return (
        <p className={styles.unknown}>
          [Unknown block type: <code>{block.type}</code>]
        </p>
      )
  }
}

/* ─────────────────────────────────────────── */
/*  Variants                                   */
/* ─────────────────────────────────────────── */

function TextBlock({ block }) {
  return <p className={styles.text}>{block.body}</p>
}

function TipBlock({ block, colorKey }) {
  return (
    <aside className={`${styles.tip} ${styles[`tip-${colorKey}`]}`}>
      {block.heading && <p className={styles.tipHeading}>{block.heading}</p>}
      <p className={styles.tipBody}>{block.body}</p>
    </aside>
  )
}

function CalloutBlock({ block }) {
  const variant = block.variant ?? 'info'
  return (
    <aside className={`${styles.callout} ${styles[`callout-${variant}`]}`}>
      {block.heading && <p className={styles.calloutHeading}>{block.heading}</p>}
      <p className={styles.calloutBody}>{block.body}</p>
    </aside>
  )
}

function ListBlock({ block, colorKey }) {
  return (
    <div className={styles.listBlock}>
      {block.heading && <p className={styles.blockHeading}>{block.heading}</p>}
      <ul className={`${styles.list} ${styles[`list-${colorKey}`]}`}>
        {block.items.map((item, i) => (
          <li key={i} className={styles.listItem}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

function ChecklistBlock({ block, colorKey }) {
  return (
    <div className={styles.listBlock}>
      {block.heading && <p className={styles.blockHeading}>{block.heading}</p>}
      <ul className={styles.checklist}>
        {block.items.map((item, i) => (
          <li key={i} className={`${styles.checkItem} ${styles[`check-${colorKey}`]}`}>
            <span className={styles.checkBox} aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ResourceBlock({ block, colorKey }) {
  return (
    <div className={styles.resourceBlock}>
      {block.heading && <p className={styles.blockHeading}>{block.heading}</p>}
      <ul className={styles.resourceList}>
        {block.links.map((link, i) => (
          <li key={i} className={`${styles.resourceItem} ${styles[`resource-${colorKey}`]}`}>
            <a href={link.href} className={styles.resourceLink} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
            {link.note && <span className={styles.resourceNote}>{link.note}</span>}
          </li>
        ))}
      </ul>
    </div>
  )
}

function StepsBlock({ block, colorKey }) {
  return (
    <div className={styles.stepsBlock}>
      {block.heading && <p className={styles.blockHeading}>{block.heading}</p>}
      <ol className={styles.stepsList}>
        {block.steps.map((step, i) => (
          <li key={i} className={`${styles.step} ${styles[`step-${colorKey}`]}`}>
            <span className={styles.stepNumber}>{i + 1}</span>
            <div className={styles.stepContent}>
              <span className={styles.stepLabel}>{step.label}</span>
              {step.detail && <span className={styles.stepDetail}>{step.detail}</span>}
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
