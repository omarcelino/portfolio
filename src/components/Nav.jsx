import { useState, useEffect } from 'react'

const links = ['about','experience','skills','projects','contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  const s = {
    nav: {
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(13,17,23,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'all 0.3s ease',
      padding: '0 2rem',
    },
    inner: { maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 },
    logo: { fontFamily: 'var(--mono)', fontWeight: 700, fontSize: 15, color: 'var(--teal)', letterSpacing: '-0.02em' },
    links: { display: 'flex', gap: 32, listStyle: 'none' },
    link: { fontFamily: 'var(--mono)', fontSize: 13, color: 'var(--muted)', cursor: 'pointer', transition: 'color 0.2s' },
    hamburger: { display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--teal)', fontSize: 22 },
  }

  return (
    <nav style={s.nav}>
      <div style={s.inner}>
        <span style={s.logo}>brian@sec:~$</span>
        <ul style={s.links} className="nav-links">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l}`} style={s.link}
                onMouseEnter={e => e.target.style.color = 'var(--teal)'}
                onMouseLeave={e => e.target.style.color = 'var(--muted)'}>
                {l}
              </a>
            </li>
          ))}
        </ul>
        <a href="mailto:hbrian83@gmail.com" style={{
          fontFamily:'var(--mono)',fontSize:12,border:'1px solid var(--teal)',
          color:'var(--teal)',padding:'6px 16px',borderRadius:4,transition:'all 0.2s'
        }}
          onMouseEnter={e=>{e.target.style.background='var(--teal)';e.target.style.color='#000'}}
          onMouseLeave={e=>{e.target.style.background='transparent';e.target.style.color='var(--teal)'}}>
          hire me
        </a>
      </div>
    </nav>
  )
}
