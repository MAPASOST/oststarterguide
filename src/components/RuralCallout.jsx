import { useRuralMode } from '../context/RuralModeContext'
import styles from './RuralCallout.module.css'

/**
 * RuralCallout — renders only when rural mode is enabled.
 * Used as a 'ruralCallout' block type in content.js.
 *
 * Props (from block data):
 *   heading  string    – short bold heading
 *   body     string    – 1-2 sentence context
 *   tips     string[]  – bulleted tips
 */
export default function RuralCallout({ heading, body, tips }) {
  const { ruralMode } = useRuralMode()
  if (!ruralMode) return null

  return (
    <aside className={styles.callout} aria-label="Rural community tip">
      <div className={styles.badge}>
        <span aria-hidden="true">🌾</span>
        <span>Rural Community Tip</span>
      </div>
      {heading && <p className={styles.heading}>{heading}</p>}
      {body && <p className={styles.body}>{body}</p>}
      {tips?.length > 0 && (
        <ul className={styles.tips}>
          {tips.map((tip, i) => <li key={i}>{tip}</li>)}
        </ul>
      )}
    </aside>
  )
}
