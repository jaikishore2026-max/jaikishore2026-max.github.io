import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import styles from './F1Helmet.module.css'

export default function F1Helmet() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height

      setMousePosition({ x, y })

      // Calculate tilt based on mouse position
      const tiltX = (y - 0.5) * 25 // Max 25deg tilt
      const tiltY = (x - 0.5) * 25

      setRotation({
        x: tiltX,
        y: tiltY
      })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => {
      setIsHovering(false)
      setRotation({ x: 0, y: 0 })
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
      container.addEventListener('mouseenter', handleMouseEnter)
      container.addEventListener('mouseleave', handleMouseLeave)

      return () => {
        container.removeEventListener('mousemove', handleMouseMove)
        container.removeEventListener('mouseenter', handleMouseEnter)
        container.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  return (
    <section className={styles.section}>
      <div className={styles.container} ref={containerRef}>
        {/* Background elements */}
        <div className={styles.background}>
          <div className={styles.glowOrb1} />
          <div className={styles.glowOrb2} />
          <div className={styles.gradientBg} />
        </div>

        {/* Helmet container with perspective */}
        <motion.div
          className={styles.helmetWrapper}
          style={{
            perspective: '1000px'
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <motion.div
            className={styles.helmetContainer}
            animate={{
              rotateX: isHovering ? rotation.x : 0,
              rotateY: isHovering ? rotation.y : 0,
              rotateZ: isHovering ? 0 : 0
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Helmet main body */}
            <div className={styles.helmet}>
              {/* Visor - glossy effect */}
              <div className={styles.visor}>
                <div className={styles.visorGlass} />
                <div className={styles.visorReflection} />
              </div>

              {/* Top stripe - red accent */}
              <div className={styles.topStripe} />

              {/* Side graphics */}
              <div className={styles.sideLeft}>
                <div className={styles.sidePattern} />
              </div>
              <div className={styles.sideRight}>
                <div className={styles.sidePattern} />
              </div>

              {/* Chin guard */}
              <div className={styles.chin}>
                <div className={styles.chinPattern} />
              </div>

              {/* Center livery */}
              <div className={styles.centerBand}>
                <div className={styles.centerDot} />
              </div>

              {/* Glow effect */}
              <div className={`${styles.glow} ${isHovering ? styles.glowActive : ''}`} />
            </div>

            {/* Floating particles around helmet */}
            <div className={styles.particles}>
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className={styles.particle}
                  animate={{
                    y: isHovering ? [-10, 10, -10] : [0, 5, 0],
                    opacity: isHovering ? [0.3, 0.8, 0.3] : [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  style={{
                    left: `${Math.cos((i / 8) * Math.PI * 2) * 120}px`,
                    top: `${Math.sin((i / 8) * Math.PI * 2) * 120}px`
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Label */}
        <motion.div
          className={styles.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3>Passion: Formula 1</h3>
          <p>Interactive Helmet • Hover to Engage</p>
        </motion.div>
      </div>
    </section>
  )
}
