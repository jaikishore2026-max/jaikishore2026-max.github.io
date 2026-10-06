import React, { useEffect, useRef } from 'react'

type Dot = { x: number; y: number; vx: number; vy: number; life: number }

export default function CursorField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const context = canvas.getContext('2d')
    if (!context) return
    const dots: Dot[] = []
    let raf = 0
    const resize = () => { canvas.width = window.innerWidth * window.devicePixelRatio; canvas.height = window.innerHeight * window.devicePixelRatio; canvas.style.width = `${window.innerWidth}px`; canvas.style.height = `${window.innerHeight}px`; context.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0) }
    const move = (event: MouseEvent) => { dots.push({ x: event.clientX, y: event.clientY, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35, life: 1 }) }
    const draw = () => { context.clearRect(0, 0, window.innerWidth, window.innerHeight); dots.splice(0, Math.max(0, dots.length - 34)); dots.forEach((dot) => { dot.x += dot.vx; dot.y += dot.vy; dot.life -= .017; context.beginPath(); context.arc(dot.x, dot.y, Math.max(dot.life * 2.2, .2), 0, Math.PI * 2); context.fillStyle = `rgba(0,242,254,${dot.life * .22})`; context.fill() }); raf = requestAnimationFrame(draw) }
    resize(); window.addEventListener('resize', resize); window.addEventListener('mousemove', move); draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); window.removeEventListener('mousemove', move) }
  }, [])
  return <canvas className="cursor-field" ref={canvasRef} aria-hidden="true" />
}
