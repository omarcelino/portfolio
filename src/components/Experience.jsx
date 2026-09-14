import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'
import SectionLabel from './SectionLabel'
import Reveal from './common/Reveal'
import RevealItem from './common/RevealItem'

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
  const theme = useTheme()
  return (
    <Box component="section" id="experience" sx={{ py: { xs: 8, sm: 12.5 }, px: { xs: 2, sm: 4 }, bgcolor: 'background.paper' }}>
      <Box sx={{ maxWidth: theme.custom.maxWidth, mx: 'auto' }}>
        <SectionLabel>experience</SectionLabel>
        <Typography component="h2" sx={{ fontFamily: theme.custom.mono, fontSize: 28, fontWeight: 700, mt: 2, mb: 6 }}>
          Where I've worked
        </Typography>
        <Reveal stagger>
          <Stack spacing={0}>
            {jobs.map((job, i) => (
              <RevealItem key={i}>
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 2fr' },
                    gap: { xs: 1.5, sm: 4 },
                    py: 4,
                    borderBottom: '1px solid',
                    borderColor: 'divider',
                    alignItems: 'start',
                  }}
                >
                  <Box>
                    <Typography sx={{ fontFamily: theme.custom.mono, fontSize: 12, color: 'primary.main', mb: 1 }}>{job.period}</Typography>
                    <Typography sx={{ fontWeight: 600, fontSize: 15, mb: 0.5 }}>{job.company}</Typography>
                    <Typography sx={{ fontSize: 13, color: 'text.secondary' }}>{job.location}</Typography>
                  </Box>
                  <Box>
                    <Typography sx={{ fontFamily: theme.custom.mono, fontSize: 15, fontWeight: 500, mb: 2 }}>{job.title}</Typography>
                    <Stack component="ul" spacing={1.25} sx={{ listStyle: 'none', p: 0, m: 0 }}>
                      {job.bullets.map((b, j) => (
                        <Box component="li" key={j} sx={{ display: 'flex', gap: 1.5, fontSize: 14, color: 'text.secondary', lineHeight: 1.6 }}>
                          <Box component="span" sx={{ color: 'primary.main', flexShrink: 0, mt: '1px' }}>
                            ▸
                          </Box>
                          <span>{b}</span>
                        </Box>
                      ))}
                    </Stack>
                  </Box>
                </Box>
              </RevealItem>
            ))}
          </Stack>
        </Reveal>
      </Box>
    </Box>
  )
}
