import { Label } from './About'

const groups = [
  { label: 'SIEM & EDR', items: ['Splunk','ELK Stack','Wazuh','CrowdStrike','Cortex XDR','TrendMicro','Cybereason'] },
  { label: 'Penetration Testing', items: ['Metasploit','Burp Suite','Nmap','Kali Linux','ParrotOS','Nikto','Gobuster'] },
  { label: 'Vulnerability Assessment', items: ['Nessus','OpenVAS','CVE / CVSS','Wireshark','OWASP Top 10','Threat Intel'] },
  { label: 'Network & Logs', items: ['TCP/IP · DNS · ARP','Firewall Logs','NIDS / HIDS','Syslogs','Cisco Meraki','Windows Event Logs'] },
  { label: 'Scripting', items: ['Python','Bash','PowerShell','SQL','Flask','Automation scripts'] },
  { label: 'Frameworks', items: ['ISO 27001','NIST','PCI-DSS','GDPR','Kenya DPA 2019'] },
  { label: 'Cloud & IAM', items: ['AWS','Azure','Active Directory','GPO','Access Control'] },
  { label: 'Incident Response', items: ['Full IR lifecycle','Alert triage','IOC analysis','SLA management','Jira · Freshdesk'] },
]

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '100px 2rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <Label>skills</Label>
        <h2 style={{ fontFamily:'var(--mono)', fontSize: 28, fontWeight: 700, margin: '16px 0 48px' }}>
          Technical toolkit
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}>
          {groups.map(g => (
            <div key={g.label} style={{
              background: 'var(--bg2)', border: '1px solid var(--border)',
              borderRadius: 8, padding: '1.25rem',
              transition: 'border-color 0.2s',
            }}
              onMouseEnter={e=>e.currentTarget.style.borderColor='var(--teal-border)'}
              onMouseLeave={e=>e.currentTarget.style.borderColor='var(--border)'}>
              <div style={{ fontFamily:'var(--mono)', fontSize: 11, color: 'var(--teal)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 12 }}>
                {g.label}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {g.items.map(item => (
                  <span key={item} style={{
                    fontSize: 12, color: 'var(--muted)',
                    background: 'var(--bg3)', borderRadius: 4,
                    padding: '3px 8px', lineHeight: 1.6,
                  }}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
