import { useState, useEffect } from 'react'

const roles = ['SOC Analyst', 'VAPT Specialist', 'Incident Responder', 'Ethical Hacker']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((roleIndex + 1) % roles.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '0 2rem', position: 'relative', overflow: 'hidden' }}>
      {/* Grid background */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
        backgroundSize: '60px 60px', opacity: 0.3,
      }} />
      {/* Radial glow */}
      <div style={{
        position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%,-50%)',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,212,170,0.06) 0%, transparent 70%)',
        zIndex: 0,
      }} />
      <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1, paddingTop: 80 }}>
        <p style={{ fontFamily: 'var(--mono)', fontSize: 14, color: 'var(--teal)', marginBottom: 20, letterSpacing: '0.05em' }}>
          hello, world — I'm
        </p>
        <h1 style={{ fontFamily: 'var(--mono)', fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: 16, letterSpacing: '-0.03em' }}>
          Brian Marcelino
        </h1>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', color: 'var(--teal)', marginBottom: 24, minHeight: '2.5rem', display: 'flex', alignItems: 'center', gap: 2 }}>
          <span>{displayed}</span>
          <span style={{ display: 'inline-block', width: 2, height: '1.2em', background: 'var(--teal)', animation: 'blink 1s steps(1) infinite', verticalAlign: 'text-bottom' }} />
        </div>
        <p style={{ fontSize: 18, color: 'var(--muted)', maxWidth: 560, marginBottom: 40, lineHeight: 1.8 }}>
          MSc Computer Security · Based in Nairobi, Kenya · 
          Protecting digital assets through threat monitoring, penetration testing, and incident response.
        </p>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <a href="#experience" style={{
            fontFamily:'var(--mono)',fontSize:14,background:'var(--teal)',color:'#000',
            padding:'12px 28px',borderRadius:4,fontWeight:700,transition:'opacity 0.2s',
            display:'inline-flex',alignItems:'center',gap:8
          }}
            onMouseEnter={e=>e.currentTarget.style.opacity='0.85'}
            onMouseLeave={e=>e.currentTarget.style.opacity='1'}>
            view my work →
          </a>
          <a href="#contact" style={{
            fontFamily:'var(--mono)',fontSize:14,border:'1px solid var(--border)',color:'var(--text)',
            padding:'12px 28px',borderRadius:4,transition:'border-color 0.2s',
          }}
            onMouseEnter={e=>e.currentTarget.style.borderColor='var(--teal)'}
            onMouseLeave={e=>e.currentTarget.style.borderColor='var(--border)'}>
            get in touch
          </a>
        </div>
        <div style={{ marginTop: 64, display: 'flex', gap: 32, flexWrap: 'wrap' }}>
          {[['4+', 'years experience'], ['3', 'countries worked in'], ['CEH', 'in progress'], ['24/7', 'SOC ready']].map(([n, l]) => (
            <div key={n}>
              <div style={{ fontFamily:'var(--mono)', fontSize: 26, fontWeight: 700, color: 'var(--teal)' }}>{n}</div>
              <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 2 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </section>
  )
}
