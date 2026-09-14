import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded'
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import SectionLabel from './SectionLabel'
import InfoCard from './common/InfoCard'
import Reveal from './common/Reveal'
import RevealItem from './common/RevealItem'

const highlights = [
  {
    icon: SchoolRoundedIcon,
    title: 'MSc Computer Science',
    sub: 'Computer Security · EPITA, Paris · 2022–2025',
  },
  {
    icon: SchoolRoundedIcon,
    title: 'BSc Information Systems',
    sub: 'Forensic Security · USIU-Africa · 2016–2021',
  },
  {
    icon: LocationOnRoundedIcon,
    title: 'Based in Nairobi, Kenya',
    sub: 'Open to remote & hybrid roles globally',
  },
  {
    icon: LinkedInIcon,
    title: 'linkedin.com/in/brianmarcelino',
    sub: 'Connect on LinkedIn',
    href: 'https://www.linkedin.com/in/brianmarcelino/',
    external: true,
  },
]

export default function About() {
  const theme = useTheme()
  return (
    <Box component="section" id="about" sx={{ py: { xs: 8, sm: 12.5 }, px: { xs: 2, sm: 4 } }}>
      <Box sx={{ maxWidth: theme.custom.maxWidth, mx: 'auto' }}>
        <SectionLabel>about me</SectionLabel>
        <Reveal>
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
                Fluent in English, Kiswahili, and French (A2). Currently pursuing my CEH certification.
              </Typography>
            </Box>

            <Reveal stagger>
              <Stack spacing={2}>
                {highlights.map((h) => (
                  <RevealItem key={h.title}>
                    <InfoCard icon={h.icon} title={h.title} subtitle={h.sub} href={h.href} external={h.external} />
                  </RevealItem>
                ))}
              </Stack>
            </Reveal>
          </Box>
        </Reveal>
      </Box>
    </Box>
  )
}
