import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'
import SectionLabel from './SectionLabel'

const groups = [
  { label: 'SIEM & EDR', items: ['Splunk', 'ELK Stack', 'Wazuh', 'CrowdStrike', 'Cortex XDR', 'TrendMicro', 'Cybereason'] },
  { label: 'Penetration Testing', items: ['Metasploit', 'Burp Suite', 'Nmap', 'Kali Linux', 'ParrotOS', 'Nikto', 'Gobuster'] },
  { label: 'Vulnerability Assessment', items: ['Nessus', 'OpenVAS', 'CVE / CVSS', 'Wireshark', 'OWASP Top 10', 'Threat Intel'] },
  { label: 'Network & Logs', items: ['TCP/IP · DNS · ARP', 'Firewall Logs', 'NIDS / HIDS', 'Syslogs', 'Cisco Meraki', 'Windows Event Logs'] },
  { label: 'Scripting', items: ['Python', 'Bash', 'PowerShell', 'SQL', 'Flask', 'Automation scripts'] },
  { label: 'Frameworks', items: ['ISO 27001', 'NIST', 'PCI-DSS', 'GDPR', 'Kenya DPA 2019'] },
  { label: 'Cloud & IAM', items: ['AWS', 'Azure', 'Active Directory', 'GPO', 'Access Control'] },
  { label: 'Incident Response', items: ['Full IR lifecycle', 'Alert triage', 'IOC analysis', 'SLA management', 'Jira · Freshdesk'] },
]

export default function Skills() {
  const theme = useTheme()
  return (
    <Box component="section" id="skills" sx={{ py: { xs: 8, sm: 12.5 }, px: { xs: 2, sm: 4 } }}>
      <Box sx={{ maxWidth: theme.custom.maxWidth, mx: 'auto' }}>
        <SectionLabel>skills</SectionLabel>
        <Typography component="h2" sx={{ fontFamily: theme.custom.mono, fontSize: 28, fontWeight: 700, mt: 2, mb: 6 }}>
          Technical toolkit
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 2 }}>
          {groups.map((g) => (
            <Paper
              key={g.label}
              variant="outlined"
              sx={{
                bgcolor: 'background.paper',
                borderColor: 'divider',
                p: '1.25rem',
                transition: 'border-color 0.2s',
                '&:hover': { borderColor: theme.custom.tealBorder },
              }}
            >
              <Typography
                sx={{
                  fontFamily: theme.custom.mono,
                  fontSize: 11,
                  color: 'primary.main',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  mb: 1.5,
                }}
              >
                {g.label}
              </Typography>
              <Stack direction="row" flexWrap="wrap" useFlexGap gap={0.75}>
                {g.items.map((item) => (
                  <Chip
                    key={item}
                    label={item}
                    size="small"
                    sx={{
                      fontSize: 12,
                      color: 'text.secondary',
                      bgcolor: theme.custom.bg3,
                      borderRadius: '4px',
                      height: 'auto',
                      '& .MuiChip-label': { px: 1, py: '3px' },
                    }}
                  />
                ))}
              </Stack>
            </Paper>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
