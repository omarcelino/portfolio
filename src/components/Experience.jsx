import { Label } from './About'

const jobs = [
  {
    title: 'Software Engineer — L1/L2 Support Lead',
    company: 'Spiro',
    location: 'Nairobi, Kenya',
    period: 'Jun 2024 – Present',
    bullets: [
      'Lead a team of 8 engineers delivering 24/7 support across Kenya, Uganda, and Rwanda',
      'Primary escalation point for complex incidents; full lifecycle documentation via Jira & Freshdesk',
      'Monitor dashboards for anomalies and coordinate swift mitigation across EV motorcycle systems',
    ],
  },
  {
    title: 'Cybersecurity & IT Risks Analyst',
    company: 'South-End Tech Limited',
    location: 'Nairobi, Kenya',
    period: 'Feb 2025 – May 2025',
    bullets: [
      'Conducted VAPT engagements using Nessus, Metasploit, Burp Suite & Wireshark for client organizations',
      'Implemented risk management frameworks aligned to ISO 27001, NIST, GDPR & Kenya DPA 2019',
      'Delivered actionable compliance and risk posture reports to senior management',
    ],
  },
  {
    title: 'Cybersecurity / SOC Analyst',
    company: 'Five Nines',
    location: 'Paris, France',
    period: 'Sep 2023 – Feb 2024',
    bullets: [
      '24/7 monitoring using CrowdStrike, Cortex XDR, TrendMicro & Cybereason in a live SOC environment',
      'Triaged IOCs (hashes, IPs, domains), investigated phishing/BEC, escalated per SLA with full documentation',
      'Sandbox malware analysis and SIEM detection rule & use-case development',
    ],
  },
  {
    title: 'IT Support Officer',
    company: 'Partners in Health',
    location: 'Rwanda',
    period: 'Nov 2021 – Mar 2022',
    bullets: [
      'Managed Cisco Meraki firewalls, switches & 30+ Ubiquiti access points',
      'Monitored network traffic, logs & security events; reconfigured network equipment',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '100px 2rem', background: 'var(--bg2)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <Label>experience</Label>
        <h2 style={{ fontFamily:'var(--mono)', fontSize: 28, fontWeight: 700, margin: '16px 0 48px' }}>
          Where I've worked
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {jobs.map((job, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 32,
              padding: '32px 0', borderBottom: '1px solid var(--border)',
              alignItems: 'start',
            }} className="exp-row">
              <div>
                <div style={{ fontFamily:'var(--mono)', fontSize: 12, color: 'var(--teal)', marginBottom: 8 }}>{job.period}</div>
                <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>{job.company}</div>
                <div style={{ fontSize: 13, color: 'var(--muted)' }}>{job.location}</div>
              </div>
              <div>
                <div style={{ fontFamily:'var(--mono)', fontSize: 15, fontWeight: 500, marginBottom: 16 }}>{job.title}</div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {job.bullets.map((b, j) => (
                    <li key={j} style={{ display: 'flex', gap: 12, fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>
                      <span style={{ color: 'var(--teal)', flexShrink: 0, marginTop: 1 }}>▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:640px){
          .exp-row { grid-template-columns: 1fr !important; gap: 12px !important; }
        }
      `}</style>
    </section>
  )
}
