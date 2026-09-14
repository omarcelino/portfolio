import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Chip from '@mui/material/Chip'
import { useTheme } from '@mui/material/styles'
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded'
import LockRoundedIcon from '@mui/icons-material/LockRounded'
import StorageRoundedIcon from '@mui/icons-material/StorageRounded'
import BugReportRoundedIcon from '@mui/icons-material/BugReportRounded'
import PublicRoundedIcon from '@mui/icons-material/PublicRounded'
import SectionLabel from './SectionLabel'
import ProjectCard from './common/ProjectCard'
import Reveal from './common/Reveal'
import RevealItem from './common/RevealItem'

const certs = [
  { name: 'CEH — Certified Ethical Hacker', issuer: 'EC-Council', status: 'in progress', highlight: true },
  { name: 'CyberShujaa Security Analyst', issuer: 'USIU-Africa', status: '2023', highlight: false },
  { name: 'CIPIT Data Protection Certificate', issuer: 'Strathmore University', status: 'Mar 2025', highlight: false },
  { name: 'KPMG Technology — Cyber IR', issuer: 'Forage', status: 'Feb 2025', highlight: false },
  { name: 'Deloitte Cyber Job Simulation', issuer: 'Forage', status: 'Feb 2025', highlight: false },
  { name: 'Tata Cybersecurity — IAM', issuer: 'Forage', status: 'Feb 2025', highlight: false },
  { name: 'AIG Shields Up', issuer: 'Forage', status: 'Sep 2024', highlight: false },
  { name: 'Datacom Cybersecurity', issuer: 'Forage', status: 'Feb 2025', highlight: false },
]

const projects = [
  {
    icon: TerminalRoundedIcon,
    title: 'HackTheBox Academy',
    tag: '45% pentest path',
    desc: 'Penetration tester learning path — Windows exploitation, privilege escalation, Active Directory attacks using Metasploit on ParrotOS.',
    link: 'https://tryhackme.com/p/brianmarcelino',
    linkLabel: 'TryHackMe profile',
  },
  {
    icon: LockRoundedIcon,
    title: 'Secure File Encryption App',
    tag: 'Python · Flask',
    desc: 'Web application for encrypting and decrypting files, built with Python/Flask and an HTML5/CSS front-end. Implements symmetric encryption workflows.',
    link: null,
  },
  {
    icon: StorageRoundedIcon,
    title: 'Hardened Linux from Scratch',
    tag: 'Gentoo · VMware',
    desc: 'Minimalistic, security-hardened Linux environment built from scratch using the Gentoo distribution — no package manager defaults, every service reviewed.',
    link: null,
  },
  {
    icon: BugReportRoundedIcon,
    title: 'AIG Ransomware Response',
    tag: 'Python · Brute-force',
    desc: 'Wrote a Python script to brute-force decryption keys as an ethical alternative to ransom payment during the AIG Shields Up simulation on Forage.',
    link: null,
  },
  {
    icon: PublicRoundedIcon,
    title: 'Root-Me CTF Challenges',
    tag: 'Web · Network',
    desc: 'Ongoing participation in web application and network security challenges on the Root-Me platform.',
    link: 'https://www.root-me.org/brianmarcelino',
    linkLabel: 'root-me.org',
  },
]

export default function Projects() {
  const theme = useTheme()
  return (
    <>
      <Box component="section" id="projects" sx={{ py: { xs: 8, sm: 12.5 }, px: { xs: 2, sm: 4 }, bgcolor: 'background.paper' }}>
        <Box sx={{ maxWidth: theme.custom.maxWidth, mx: 'auto' }}>
          <SectionLabel>projects & labs</SectionLabel>
          <Typography component="h2" sx={{ fontFamily: theme.custom.mono, fontSize: 28, fontWeight: 700, mt: 2, mb: 6 }}>
            Hands-on work
          </Typography>
          <Reveal stagger>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 2 }}>
              {projects.map((p) => (
                <RevealItem key={p.title}>
                  <ProjectCard {...p} />
                </RevealItem>
              ))}
            </Box>
          </Reveal>
        </Box>
      </Box>

      <Box component="section" sx={{ py: { xs: 8, sm: 12.5 }, px: { xs: 2, sm: 4 } }}>
        <Box sx={{ maxWidth: theme.custom.maxWidth, mx: 'auto' }}>
          <SectionLabel>certifications</SectionLabel>
          <Typography component="h2" sx={{ fontFamily: theme.custom.mono, fontSize: 28, fontWeight: 700, mt: 2, mb: 6 }}>
            Credentials
          </Typography>
          <Reveal stagger>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 1.5 }}>
              {certs.map((c) => (
                <RevealItem key={c.name}>
                  <Paper
                    variant="outlined"
                    sx={{
                      bgcolor: 'background.paper',
                      borderColor: c.highlight ? 'primary.main' : 'divider',
                      p: '1rem 1.25rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: 1.5,
                      height: '100%',
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{ fontFamily: theme.custom.mono, fontSize: 13, fontWeight: 500, color: c.highlight ? 'primary.main' : 'text.primary' }}
                      >
                        {c.name}
                      </Typography>
                      <Typography sx={{ fontSize: 12, color: 'text.secondary', mt: 0.5 }}>{c.issuer}</Typography>
                    </Box>
                    <Chip
                      label={c.status}
                      size="small"
                      sx={{
                        fontFamily: theme.custom.mono,
                        fontSize: 11,
                        whiteSpace: 'nowrap',
                        color: c.highlight ? theme.palette.primary.contrastText : 'text.secondary',
                        bgcolor: c.highlight ? 'primary.main' : theme.custom.surfaceContainerHigh,
                      }}
                    />
                  </Paper>
                </RevealItem>
              ))}
            </Box>
          </Reveal>
        </Box>
      </Box>
    </>
  )
}
