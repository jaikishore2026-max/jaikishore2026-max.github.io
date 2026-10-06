import React, { useRef, useState } from 'react'
import { Maximize2, Minus, Plus, RotateCcw } from 'lucide-react'

type Node = { id: string; x: number; y: number; label: string; type: string; metric: string; tone: 'cyan' | 'violet' | 'emerald' }

const initialNodes: Node[] = [
  { id: 'signal', x: 9, y: 40, label: 'SIGNAL', type: 'problem sensing', metric: 'observe', tone: 'cyan' },
  { id: 'strategy', x: 31, y: 22, label: 'STRATEGY', type: 'positioning', metric: 'clarify', tone: 'violet' },
  { id: 'build', x: 31, y: 62, label: 'BUILD', type: 'technical execution', metric: 'ship', tone: 'cyan' },
  { id: 'growth', x: 56, y: 41, label: 'GROWTH', type: 'distribution loop', metric: '+150%', tone: 'emerald' },
  { id: 'proof', x: 79, y: 20, label: 'PROOF', type: 'measurable outcomes', metric: '500+', tone: 'violet' },
  { id: 'next', x: 79, y: 65, label: 'NEXT MOVE', type: 'iterate forward', metric: 'repeat', tone: 'emerald' },
]

const edges = [['signal', 'strategy'], ['signal', 'build'], ['strategy', 'growth'], ['build', 'growth'], ['growth', 'proof'], ['growth', 'next']]

export default function InteractiveNodeCanvas() {
  const [nodes, setNodes] = useState(initialNodes)
  const [scale, setScale] = useState(1)
  const [dragging, setDragging] = useState<string | null>(null)
  const [selected, setSelected] = useState('growth')
  const frameRef = useRef<HTMLDivElement>(null)

  const moveNode = (event: React.PointerEvent, id: string) => {
    if (!frameRef.current) return
    const rect = frameRef.current.getBoundingClientRect()
    const x = Math.max(2, Math.min(88, ((event.clientX - rect.left) / rect.width) * 100))
    const y = Math.max(8, Math.min(82, ((event.clientY - rect.top) / rect.height) * 100))
    setNodes((current) => current.map((node) => node.id === id ? { ...node, x, y } : node))
  }

  const nodeById = (id: string) => nodes.find((node) => node.id === id) || initialNodes[0]

  return <div className="node-canvas-shell">
    <div className="node-toolbar"><span><i className="pulse-dot" /> INTERACTIVE SYSTEM MAP</span><div><button onClick={() => setScale((value) => Math.min(value + .12, 1.6))} aria-label="Zoom in"><Plus size={14} /></button><button onClick={() => setScale((value) => Math.max(value - .12, .7))} aria-label="Zoom out"><Minus size={14} /></button><button onClick={() => { setScale(1); setNodes(initialNodes) }} aria-label="Reset canvas"><RotateCcw size={14} /></button><button onClick={() => setScale(1.22)} aria-label="Focus canvas"><Maximize2 size={14} /></button></div></div>
    <div className="node-canvas" ref={frameRef} style={{ '--canvas-scale': scale } as React.CSSProperties}>
      <div className="node-crosshair crosshair-one" /><div className="node-crosshair crosshair-two" />
      {edges.map(([from, to]) => { const source = nodeById(from); const target = nodeById(to); return <svg className="node-edge" key={`${from}-${to}`}><line x1={`${source.x}%`} y1={`${source.y}%`} x2={`${target.x}%`} y2={`${target.y}%`} /></svg> })}
      {nodes.map((node) => <button key={node.id} className={`network-node node-${node.tone} ${selected === node.id ? 'is-selected' : ''}`} style={{ left: `${node.x}%`, top: `${node.y}%` }} onClick={() => setSelected(node.id)} onPointerDown={(event) => { event.currentTarget.setPointerCapture(event.pointerId); setDragging(node.id) }} onPointerMove={(event) => dragging === node.id && moveNode(event, node.id)} onPointerUp={() => setDragging(null)}><span className="node-port" /><small>{node.type}</small><b>{node.label}</b><em>{node.metric}</em></button>)}
      <div className="node-hint">DRAG NODES <span>•</span> CLICK TO INSPECT <span>•</span> SCROLL TO DISCOVER</div>
    </div>
    <div className="node-inspector"><span className={`inspector-dot node-${nodeById(selected).tone}`} /><div><small>SELECTED NODE / {nodeById(selected).type}</small><strong>{nodeById(selected).label}</strong></div><em>{nodeById(selected).metric}</em></div>
  </div>
}
