import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded'
import CallRoundedIcon from '@mui/icons-material/CallRounded'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded'
import ShieldRoundedIcon from '@mui/icons-material/ShieldRounded'
import SectionLabel from './SectionLabel'
import InfoCard from './common/InfoCard'
import Reveal from './common/Reveal'
import RevealItem from './common/RevealItem'

const channels = [
  { icon: MailOutlineRoundedIcon, label: 'Email', text: 'hbrian83@gmail.com', href: 'mailto:hbrian83@gmail.com' },
  { icon: CallRoundedIcon, label: 'Phone', text: '+254 792 104 093', href: 'tel:+254792104093' },
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    text: 'linkedin.com/in/brianmarcelino',
    href: 'https://www.linkedin.com/in/brianmarcelino/',
    external: true,
  },
  {
    icon: TerminalRoundedIcon,
    label: 'TryHackMe',
    text: 'tryhackme.com/p/brianmarcelino',
    href: 'https://tryhackme.com/p/brianmarcelino',
    external: true,
  },
  {
    icon: ShieldRoundedIcon,
    label: 'Root-Me',
    text: 'root-me.org/brianmarcelino',
    href: 'https://www.root-me.org/brianmarcelino',
    external: true,
  },
]

export default function Contact() {
  const theme = useTheme()
  return (
    <Box
      component="section"
      id="contact"
      sx={{ py: { xs: 8, sm: 12.5 }, px: { xs: 2, sm: 4 }, bgcolor: 'background.paper', borderTop: '1px solid', borderColor: 'divider' }}
    >
      <Box sx={{ maxWidth: theme.custom.maxWidth, mx: 'auto' }}>
        <SectionLabel>contact</SectionLabel>
        <Reveal>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(auto-fit, minmax(280px, 1fr))' },
              gap: 8,
              mt: 6,
            }}
          >
            <Box>
              <Typography component="h2" sx={{ fontFamily: theme.custom.mono, fontSize: 28, fontWeight: 700, lineHeight: 1.3, mb: 2 }}>
                Let's work
                <br />
                <Box component="span" sx={{ color: 'primary.main' }}>
                  together.
                </Box>
              </Typography>
              <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 4 }}>
                I'm currently open to SOC Analyst, VAPT, and cybersecurity roles — remote or in Nairobi. If you have an
                opportunity or just want to connect, reach out.
              </Typography>
              <Button
                href="mailto:hbrian83@gmail.com"
                variant="contained"
                startIcon={<MailOutlineRoundedIcon sx={{ fontSize: 16 }} />}
                sx={{
                  bgcolor: 'primary.main',
                  color: theme.palette.primary.contrastText,
                  px: 4,
                  py: 1.5,
                  fontWeight: 700,
                }}
              >
                send an email
              </Button>
            </Box>

            <Reveal stagger>
              <Stack spacing={2}>
                {channels.map((c) => (
                  <RevealItem key={c.label}>
                    <InfoCard icon={c.icon} eyebrow={c.label} title={c.text} href={c.href} external={c.external} />
                  </RevealItem>
                ))}
              </Stack>
            </Reveal>
          </Box>
        </Reveal>

        <Stack
          direction="row"
          spacing={2}
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            mt: 10,
            pt: 4,
            borderTop: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Typography sx={{ fontFamily: theme.custom.mono, fontSize: 13, color: 'text.secondary' }}>
            brian@sec:~$ <Box component="span" sx={{ color: 'primary.main' }}>logout</Box>
          </Typography>
          <Typography sx={{ fontSize: 12, color: 'text.secondary' }}>© 2026 Brian Marcelino · Nairobi, Kenya</Typography>
        </Stack>
      </Box>
    </Box>
  )
}
