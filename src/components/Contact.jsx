import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import SectionLabel from './SectionLabel'

const channels = [
  ['📧', 'Email', 'hbrian83@gmail.com', 'mailto:hbrian83@gmail.com'],
  ['📞', 'Phone', '+254 792 104 093', 'tel:+254792104093'],
  ['💼', 'LinkedIn', 'linkedin.com/in/brianmarcelino', 'https://www.linkedin.com/in/brianmarcelino/'],
  ['🖥️', 'TryHackMe', 'tryhackme.com/p/brianmarcelino', 'https://tryhackme.com/p/brianmarcelino'],
  ['⚔️', 'Root-Me', 'root-me.org/brianmarcelino', 'https://www.root-me.org/brianmarcelino'],
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
              disableElevation
              sx={{
                fontFamily: theme.custom.mono,
                fontSize: 14,
                bgcolor: 'primary.main',
                color: '#000',
                px: 4,
                py: 1.5,
                fontWeight: 700,
                '&:hover': { bgcolor: 'primary.main', opacity: 0.85 },
              }}
            >
              send an email →
            </Button>
          </Box>

          <Stack spacing={2}>
            {channels.map(([icon, label, text, href]) => (
              <Paper
                key={label}
                component="a"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.75,
                  bgcolor: 'background.default',
                  borderColor: 'divider',
                  p: '1rem 1.25rem',
                  color: 'text.primary',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s',
                  '&:hover': { borderColor: theme.custom.tealBorder },
                }}
              >
                <Typography sx={{ fontSize: 20 }}>{icon}</Typography>
                <Box>
                  <Typography
                    sx={{ fontFamily: theme.custom.mono, fontSize: 11, color: 'primary.main', textTransform: 'uppercase', letterSpacing: '0.08em', mb: 0.25 }}
                  >
                    {label}
                  </Typography>
                  <Typography sx={{ fontSize: 13, color: 'text.secondary' }}>{text}</Typography>
                </Box>
              </Paper>
            ))}
          </Stack>
        </Box>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          spacing={2}
          sx={{ mt: 10, pt: 4, borderTop: '1px solid', borderColor: 'divider' }}
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
