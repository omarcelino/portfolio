import { useState, useEffect } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import { useTheme } from '@mui/material/styles'

const links = ['about', 'experience', 'skills', 'projects', 'contact']

export default function Nav() {
  const theme = useTheme()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: scrolled ? 'rgba(13,17,23,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: `1px solid ${scrolled ? theme.custom.border : 'transparent'}`,
        transition: 'all 0.3s ease',
      }}
    >
      <Toolbar
        sx={{
          maxWidth: theme.custom.maxWidth,
          width: '100%',
          mx: 'auto',
          px: { xs: 2, sm: 3 },
          height: 64,
          minHeight: '64px !important',
        }}
      >
        <Typography
          sx={{ fontFamily: theme.custom.mono, fontWeight: 700, fontSize: 15, color: 'primary.main', letterSpacing: '-0.02em', flexGrow: 1 }}
        >
          brian@sec:~$
        </Typography>

        <Stack direction="row" spacing={4} sx={{ display: { xs: 'none', sm: 'flex' }, mr: 4 }}>
          {links.map((l) => (
            <Link
              key={l}
              href={`#${l}`}
              underline="none"
              sx={{
                fontFamily: theme.custom.mono,
                fontSize: 13,
                color: 'text.secondary',
                transition: 'color 0.2s',
                '&:hover': { color: 'primary.main' },
              }}
            >
              {l}
            </Link>
          ))}
        </Stack>

        <Button
          href="mailto:hbrian83@gmail.com"
          variant="outlined"
          size="small"
          sx={{
            fontFamily: theme.custom.mono,
            fontSize: 12,
            color: 'primary.main',
            borderColor: 'primary.main',
            px: 2,
            '&:hover': { bgcolor: 'primary.main', color: '#000', borderColor: 'primary.main' },
          }}
        >
          hire me
        </Button>
      </Toolbar>
    </AppBar>
  )
}
