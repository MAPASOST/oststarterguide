import { useEffect, useRef } from 'react'
import ContentBlock from './ContentBlock'
import styles from './TopicSection.module.css'

/**
 * TopicSection — renders one section within a phase.
 * Uses IntersectionObserver to notify the parent when the section
 * scrolls into the viewport so the sidebar can highlight it.
 *
 * Props:
 *   section    Section   – section object from content.js
 *   colorKey   string    – inherited from the parent phase
 *   isActive   bool      – whether this is the currently active section
 *   onVisible  () => void – called when section enters viewport
 */
export default function TopicSection({ section, colorKey, isActive, onVisible }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !onVisible) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onVisible()
      },
      { threshold: 0.2, rootMargin: '-10% 0px -60% 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [onVisible])

  return (
    <section
      id={section.id}
      ref={ref}
      className={`${styles.section} ${isActive ? styles.sectionActive : ''}`}
      aria-labelledby={`heading-${section.id}`}
    >
      {/* ── Heading bar ── */}
      <div className={`${styles.headingBar} ${styles[`color-${colorKey}`]}`}>
        <h2 id={`heading-${section.id}`} className={styles.heading}>
          {section.title}
        </h2>
      </div>

      {/* ── Body ── */}
      <div className={styles.body}>
        {section.intro && (
          <p className={styles.intro}>{section.intro}</p>
        )}

        {section.blocks && section.blocks.length > 0 && (
          <div className={styles.blocks}>
            {section.blocks.map((block, i) => (
              <ContentBlock key={i} block={block} colorKey={colorKey} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
