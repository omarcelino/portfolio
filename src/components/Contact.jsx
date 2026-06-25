import { Label } from './About'

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '100px 2rem', background: 'var(--bg2)', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <Label>contact</Label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 64, marginTop: 48 }}>
          <div>
            <h2 style={{ fontFamily:'var(--mono)', fontSize: 28, fontWeight: 700, lineHeight: 1.3, marginBottom: 16 }}>
              Let's work<br /><span style={{ color:'var(--teal)' }}>together.</span>
            </h2>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: 32 }}>
              I'm currently open to SOC Analyst, VAPT, and cybersecurity roles — remote or in Nairobi. If you have an opportunity or just want to connect, reach out.
            </p>
            <a href="mailto:hbrian83@gmail.com" style={{
              display: 'inline-block', fontFamily:'var(--mono)', fontSize: 14,
              background: 'var(--teal)', color: '#000', padding: '12px 32px',
              borderRadius: 4, fontWeight: 700, transition: 'opacity 0.2s',
            }}
              onMouseEnter={e=>e.currentTarget.style.opacity='0.85'}
              onMouseLeave={e=>e.currentTarget.style.opacity='1'}>
              send an email →
            </a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              ['📧', 'Email', 'hbrian83@gmail.com', 'mailto:hbrian83@gmail.com'],
              ['📞', 'Phone', '+254 792 104 093', 'tel:+254792104093'],
              ['💼', 'LinkedIn', 'linkedin.com/in/brianmarcelino', 'https://www.linkedin.com/in/brianmarcelino/'],
              ['🖥️', 'TryHackMe', 'tryhackme.com/p/brianmarcelino', 'https://tryhackme.com/p/brianmarcelino'],
              ['⚔️', 'Root-Me', 'root-me.org/brianmarcelino', 'https://www.root-me.org/brianmarcelino'],
            ].map(([icon, label, text, href]) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  background: 'var(--bg)', border: '1px solid var(--border)',
                  borderRadius: 8, padding: '1rem 1.25rem',
                  color: 'var(--text)', textDecoration: 'none', transition: 'border-color 0.2s',
                }}
                onMouseEnter={e=>e.currentTarget.style.borderColor='var(--teal-border)'}
                onMouseLeave={e=>e.currentTarget.style.borderColor='var(--border)'}>
                <span style={{ fontSize: 20 }}>{icon}</span>
                <div>
                  <div style={{ fontFamily:'var(--mono)', fontSize: 11, color: 'var(--teal)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 2 }}>{label}</div>
                  <div style={{ fontSize: 13, color: 'var(--muted)' }}>{text}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div style={{ marginTop: 80, paddingTop: 32, borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <span style={{ fontFamily:'var(--mono)', fontSize: 13, color: 'var(--muted)' }}>brian@sec:~$ <span style={{ color: 'var(--teal)' }}>logout</span></span>
          <span style={{ fontSize: 12, color: 'var(--muted)' }}>© 2026 Brian Marcelino · Nairobi, Kenya</span>
        </div>
      </div>
    </section>
  )
}
