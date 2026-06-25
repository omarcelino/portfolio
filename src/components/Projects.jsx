import { Label } from './About'

const certs = [
  { name: 'CEH — Certified Ethical Hacker', issuer: 'EC-Council', status: 'in progress', highlight: true },
  { name: 'CyberShujaa Security Analyst', issuer: 'USIU-Africa', status: '2023', highlight: false },
  { name: 'CIPIT Data Protection Certificate', issuer: 'Strathmore University', status: 'Mar 2025', highlight: false },
  { name: 'KPMG Technology — Cyber IR', issuer: 'Forage', status: 'Feb 2025', highlight: false },
  { name: 'Deloitte Cyber Job Simulation', issuer: 'Forage', status: 'Feb 2025', highlight: false },
  { name: 'Tata Cybersecurity — IAM', issuer: 'Forage', status: 'Feb 2025', highlight: false },
  { name: 'AIG Shields Up', issuer: 'Forage', status: 'Sep 2024', highlight: false },
  { name: 'Datacom Cybersecurity', issuer: 'Forage', status: 'Feb 2025', highlight: false },
]

const projects = [
  {
    title: 'HackTheBox Academy',
    tag: '45% pentest path',
    desc: 'Penetration tester learning path — Windows exploitation, privilege escalation, Active Directory attacks using Metasploit on ParrotOS.',
    link: 'https://tryhackme.com/p/brianmarcelino',
    linkLabel: 'TryHackMe profile →',
  },
  {
    title: 'Secure File Encryption App',
    tag: 'Python · Flask',
    desc: 'Web application for encrypting and decrypting files, built with Python/Flask and an HTML5/CSS front-end. Implements symmetric encryption workflows.',
    link: null,
  },
  {
    title: 'Hardened Linux from Scratch',
    tag: 'Gentoo · VMware',
    desc: 'Minimalistic, security-hardened Linux environment built from scratch using the Gentoo distribution — no package manager defaults, every service reviewed.',
    link: null,
  },
  {
    title: 'AIG Ransomware Response',
    tag: 'Python · Brute-force',
    desc: 'Wrote a Python script to brute-force decryption keys as an ethical alternative to ransom payment during the AIG Shields Up simulation on Forage.',
    link: null,
  },
  {
    title: 'Root-Me CTF Challenges',
    tag: 'Web · Network',
    desc: 'Ongoing participation in web application and network security challenges on the Root-Me platform.',
    link: 'https://www.root-me.org/brianmarcelino',
    linkLabel: 'root-me.org →',
  },
]

export default function Projects() {
  return (
    <>
      <section id="projects" style={{ padding: '100px 2rem', background: 'var(--bg2)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <Label>projects & labs</Label>
          <h2 style={{ fontFamily:'var(--mono)', fontSize: 28, fontWeight: 700, margin: '16px 0 48px' }}>
            Hands-on work
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
            {projects.map(p => (
              <div key={p.title} style={{
                background: 'var(--bg)', border: '1px solid var(--border)',
                borderRadius: 8, padding: '1.5rem',
                display: 'flex', flexDirection: 'column', gap: 12,
                transition: 'border-color 0.2s, transform 0.2s',
              }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor='var(--teal-border)';e.currentTarget.style.transform='translateY(-2px)'}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--border)';e.currentTarget.style.transform='translateY(0)'}}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                  <span style={{ fontFamily:'var(--mono)', fontSize: 15, fontWeight: 500 }}>{p.title}</span>
                  <span style={{ fontFamily:'var(--mono)', fontSize: 10, color: 'var(--teal)', background: 'var(--teal-dim)', border: '1px solid var(--teal-border)', borderRadius: 4, padding: '2px 8px', whiteSpace: 'nowrap', flexShrink: 0 }}>{p.tag}</span>
                </div>
                <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7, flex: 1 }}>{p.desc}</p>
                {p.link && <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ fontFamily:'var(--mono)', fontSize: 12, color: 'var(--teal)' }}>{p.linkLabel}</a>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <Label>certifications</Label>
          <h2 style={{ fontFamily:'var(--mono)', fontSize: 28, fontWeight: 700, margin: '16px 0 48px' }}>
            Credentials
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 12 }}>
            {certs.map(c => (
              <div key={c.name} style={{
                background: 'var(--bg2)',
                border: c.highlight ? '1px solid var(--teal-border)' : '1px solid var(--border)',
                borderRadius: 8, padding: '1rem 1.25rem',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12,
              }}>
                <div>
                  <div style={{ fontFamily:'var(--mono)', fontSize: 13, fontWeight: 500, color: c.highlight ? 'var(--teal)' : 'var(--text)' }}>{c.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 4 }}>{c.issuer}</div>
                </div>
                <span style={{
                  fontSize: 11, fontFamily:'var(--mono)', whiteSpace: 'nowrap',
                  color: c.highlight ? '#000' : 'var(--muted)',
                  background: c.highlight ? 'var(--teal)' : 'var(--bg3)',
                  borderRadius: 4, padding: '3px 8px',
                }}>{c.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
