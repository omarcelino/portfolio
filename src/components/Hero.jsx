import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import { motion, useReducedMotion } from 'framer-motion'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded'
import { staggerContainer } from '../motion/variants'
import RevealItem from './common/RevealItem'

const roles = ['SOC Analyst', 'VAPT Specialist', 'Incident Responder', 'Ethical Hacker']

const stats = [
  ['4+', 'years experience'],
  ['3', 'countries worked in'],
  ['CEH', 'in progress'],
  ['24/7', 'SOC ready'],
]

export default function Hero() {
  const theme = useTheme()
  const reduceMotion = useReducedMotion()
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((roleIndex + 1) % roles.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        px: { xs: 2, sm: 4 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          backgroundImage: `linear-gradient(${theme.palette.divider} 1px, transparent 1px), linear-gradient(90deg, ${theme.palette.divider} 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          opacity: 0.3,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.primary.main}12 0%, transparent 70%)`,
          zIndex: 0,
        }}
      />

      <Box
        component={motion.div}
        initial={reduceMotion ? false : 'hidden'}
        animate="show"
        variants={staggerContainer(0.1)}
        sx={{ maxWidth: theme.custom.maxWidth, mx: 'auto', width: '100%', position: 'relative', zIndex: 1, pt: 10 }}
      >
        <RevealItem>
          <Typography sx={{ fontFamily: theme.custom.mono, fontSize: 14, color: 'primary.main', mb: 2.5, letterSpacing: '0.05em' }}>
            hello, world — I'm
          </Typography>
        </RevealItem>

        <RevealItem>
          <Typography
            component="h1"
            sx={{
              fontFamily: theme.custom.mono,
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              mb: 2,
              letterSpacing: '-0.03em',
            }}
          >
            Brian Marcelino
          </Typography>
        </RevealItem>

        <RevealItem>
          <Box
            sx={{
              fontFamily: theme.custom.mono,
              fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
              color: 'primary.main',
              mb: 3,
              minHeight: '2.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: 0.25,
            }}
          >
            <span>{displayed}</span>
            <Box
              component="span"
              sx={{
                display: 'inline-block',
                width: 2,
                height: '1.2em',
                background: 'primary.main',
                animation: reduceMotion ? 'none' : 'blink 1s steps(1) infinite',
                verticalAlign: 'text-bottom',
                '@keyframes blink': { '0%, 100%': { opacity: 1 }, '50%': { opacity: 0 } },
              }}
            />
          </Box>
        </RevealItem>

        <RevealItem>
          <Typography sx={{ fontSize: 18, color: 'text.secondary', maxWidth: 560, mb: 5, lineHeight: 1.8 }}>
            MSc Computer Security · Based in Nairobi, Kenya ·
            Protecting digital assets through threat monitoring, penetration testing, and incident response.
          </Typography>
        </RevealItem>

        <RevealItem>
          <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap' }}>
            <Button
              href="#experience"
              variant="contained"
              endIcon={<ArrowForwardRoundedIcon sx={{ fontSize: 16 }} />}
              sx={{
                bgcolor: 'primary.main',
                color: theme.palette.primary.contrastText,
                px: 3.5,
                py: 1.5,
                fontWeight: 700,
              }}
            >
              view my work
            </Button>
            <Button
              href="#contact"
              variant="outlined"
              startIcon={<MailOutlineRoundedIcon sx={{ fontSize: 16 }} />}
              sx={{
                color: 'text.primary',
                borderColor: 'divider',
                px: 3.5,
                py: 1.5,
              }}
            >
              get in touch
            </Button>
          </Stack>
        </RevealItem>

        <RevealItem>
          <Stack direction="row" spacing={4} sx={{ flexWrap: 'wrap', mt: 8 }}>
            {stats.map(([n, l]) => (
              <Box key={n}>
                <Typography sx={{ fontFamily: theme.custom.mono, fontSize: 26, fontWeight: 700, color: 'primary.main' }}>{n}</Typography>
                <Typography sx={{ fontSize: 13, color: 'text.secondary', mt: 0.25 }}>{l}</Typography>
              </Box>
            ))}
          </Stack>
        </RevealItem>
      </Box>
    </Box>
  )
}
