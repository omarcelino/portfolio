export default function About() {
  const card = {
    background: 'var(--bg2)', border: '1px solid var(--border)',
    borderRadius: 8, padding: '1.25rem 1.5rem',
  }
  return (
    <section id="about" style={{ padding: '100px 2rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <Label>about me</Label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 48, marginTop: 48 }}>
          <div>
            <h2 style={{ fontFamily:'var(--mono)', fontSize: 28, fontWeight: 700, marginBottom: 20, lineHeight: 1.2 }}>
              Defending systems,<br /><span style={{ color:'var(--teal)' }}>one alert at a time.</span>
            </h2>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: 16 }}>
              I'm a Security Analyst with hands-on SOC and VAPT experience, passionate about protecting digital assets and critical infrastructure. I specialize in threat monitoring, vulnerability assessment, and incident response.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: 16 }}>
              I've worked in 24/7 security operations centres using CrowdStrike, Cortex XDR, TrendMicro, Wazuh, and Splunk, and have conducted penetration testing engagements with Metasploit, Burp Suite, and Nessus. Outside work hours, you'll find me on HackTheBox or TryHackMe.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8 }}>
              🌍 Fluent in English, Kiswahili, and French (A2). Currently pursuing my CEH certification.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              ['🎓', 'MSc Computer Science', 'Computer Security · EPITA, Paris · 2022–2025'],
              ['🎓', 'BSc Information Systems', 'Forensic Security · USIU-Africa · 2016–2021'],
              ['📍', 'Based in Nairobi, Kenya', 'Open to remote & hybrid roles globally'],
              ['🌐', 'linkedin.com/in/brianmarcelino', 'Connect on LinkedIn'],
            ].map(([icon, title, sub]) => (
              <div key={title} style={card}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 20 }}>{icon}</span>
                  <div>
                    <div style={{ fontFamily:'var(--mono)', fontSize: 14, fontWeight: 500 }}>{title}</div>
                    <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 3 }}>{sub}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Label({ children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 8 }}>
      <span style={{ fontFamily:'var(--mono)', fontSize: 12, color: 'var(--teal)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        {children}
      </span>
      <div style={{ flex: 1, height: 1, background: 'var(--border)' }} />
    </div>
  )
}
