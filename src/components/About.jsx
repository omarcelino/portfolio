import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'
import SectionLabel from './SectionLabel'

const highlights = [
  ['🎓', 'MSc Computer Science', 'Computer Security · EPITA, Paris · 2022–2025'],
  ['🎓', 'BSc Information Systems', 'Forensic Security · USIU-Africa · 2016–2021'],
  ['📍', 'Based in Nairobi, Kenya', 'Open to remote & hybrid roles globally'],
  ['🌐', 'linkedin.com/in/brianmarcelino', 'Connect on LinkedIn'],
]

export default function About() {
  const theme = useTheme()
  return (
    <Box component="section" id="about" sx={{ py: { xs: 8, sm: 12.5 }, px: { xs: 2, sm: 4 } }}>
      <Box sx={{ maxWidth: theme.custom.maxWidth, mx: 'auto' }}>
        <SectionLabel>about me</SectionLabel>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(auto-fit, minmax(280px, 1fr))' },
            gap: 6,
            mt: 6,
          }}
        >
          <Box>
            <Typography component="h2" sx={{ fontFamily: theme.custom.mono, fontSize: 28, fontWeight: 700, mb: 2.5, lineHeight: 1.2 }}>
              Defending systems,
              <br />
              <Box component="span" sx={{ color: 'primary.main' }}>
                one alert at a time.
              </Box>
            </Typography>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
              I'm a Security Analyst with hands-on SOC and VAPT experience, passionate about protecting digital assets and
              critical infrastructure. I specialize in threat monitoring, vulnerability assessment, and incident response.
            </Typography>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}>
              I've worked in 24/7 security operations centres using CrowdStrike, Cortex XDR, TrendMicro, Wazuh, and Splunk,
              and have conducted penetration testing engagements with Metasploit, Burp Suite, and Nessus. Outside work
              hours, you'll find me on HackTheBox or TryHackMe.
            </Typography>
            <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              🌍 Fluent in English, Kiswahili, and French (A2). Currently pursuing my CEH certification.
            </Typography>
          </Box>

          <Stack spacing={2}>
            {highlights.map(([icon, title, sub]) => (
              <Paper key={title} variant="outlined" sx={{ bgcolor: 'background.paper', borderColor: 'divider', p: '1.25rem 1.5rem' }}>
                <Stack direction="row" spacing={1.5} alignItems="flex-start">
                  <Typography sx={{ fontSize: 20 }}>{icon}</Typography>
                  <Box>
                    <Typography sx={{ fontFamily: theme.custom.mono, fontSize: 14, fontWeight: 500 }}>{title}</Typography>
                    <Typography sx={{ fontSize: 13, color: 'text.secondary', mt: 0.375 }}>{sub}</Typography>
                  </Box>
                </Stack>
              </Paper>
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}
