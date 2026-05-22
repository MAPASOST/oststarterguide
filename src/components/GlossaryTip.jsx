import { useId } from 'react'
import styles from './GlossaryTip.module.css'

/**
 * GlossaryTip — inline tooltip for afterschool-sector jargon.
 *
 * Props:
 *   text        string  — the matched term to display
 *   definition  string  — plain-text definition shown in the tooltip
 */
export default function GlossaryTip({ text, definition }) {
  const id = useId()
  return (
    <span className={styles.wrapper}>
      <button
        type="button"
        className={styles.trigger}
        aria-describedby={id}
      >
        {text}
      </button>
      <span role="tooltip" id={id} className={styles.tip}>
        <strong className={styles.tipTerm}>{text}</strong>
        {' '}{definition}
      </span>
    </span>
  )
}
