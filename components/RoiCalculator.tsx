import React, { useMemo, useState } from 'react'
import { ArrowUpRight, Calculator, TrendingUp } from 'lucide-react'

export default function RoiCalculator() {
  const [audience, setAudience] = useState(10000)
  const [growth, setGrowth] = useState(18)
  const [months, setMonths] = useState(6)
  const projection = useMemo(() => Math.round(audience * Math.pow(1 + growth / 100, months)), [audience, growth, months])
  const lift = projection - audience
  return <div className="roi-widget"><div className="roi-heading"><div className="proof-icon"><Calculator size={20} /></div><div><span className="tech-label">LIVE PLAYGROUND / GROWTH MODEL</span><h3>What could compound?</h3></div></div><p className="roi-intro">Move the inputs. Watch the distribution layer turn into a concrete projection.</p><div className="roi-controls"><label><span>Starting audience <b>{audience.toLocaleString()}</b></span><input type="range" min="1000" max="100000" step="1000" value={audience} onChange={(event) => setAudience(Number(event.target.value))} /></label><label><span>Monthly growth <b>{growth}%</b></span><input type="range" min="2" max="40" value={growth} onChange={(event) => setGrowth(Number(event.target.value))} /></label><label><span>Time horizon <b>{months} months</b></span><input type="range" min="1" max="18" value={months} onChange={(event) => setMonths(Number(event.target.value))} /></label></div><div className="roi-result"><div><small>PROJECTED REACH</small><strong>{projection.toLocaleString()}</strong><span>+{lift.toLocaleString()} net new connections</span></div><div className="roi-spark"><TrendingUp size={21} /><span>{growth}% / mo</span></div></div><a href="mailto:mailme.jaikishore2026@gmail.com?subject=Falkon%20Labs%20growth%20system">Talk growth systems <ArrowUpRight size={15} /></a></div>
}
