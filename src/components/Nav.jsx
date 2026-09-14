import { useState, useEffect, useRef } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import Drawer from '@mui/material/Drawer'
import Tooltip from '@mui/material/Tooltip'
import { useTheme, alpha } from '@mui/material/styles'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded'
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded'
import { useColorMode } from '../theme/ColorModeContext'

const links = ['about', 'experience', 'skills', 'projects', 'contact']

export default function Nav() {
  const theme = useTheme()
  const { mode, toggleMode } = useColorMode()
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const observerRef = useRef(null)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  useEffect(() => {
    const sections = links.map((id) => document.getElementById(id)).filter(Boolean)
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) {
          setActive(visible[0].target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )
    sections.forEach((s) => observerRef.current.observe(s))
    return () => observerRef.current?.disconnect()
  }, [])

  const NavLinks = ({ onClick, direction = 'row', spacing = 4 }) => (
    <Stack direction={direction} spacing={spacing}>
      {links.map((l) => (
        <Link
          key={l}
          href={`#${l}`}
          underline="none"
          onClick={onClick}
          aria-current={active === l ? 'true' : undefined}
          sx={{
            fontFamily: theme.custom.mono,
            fontSize: 13,
            color: active === l ? 'primary.main' : 'text.secondary',
            transition: 'color 0.2s ease',
            '&:hover': { color: 'primary.main' },
          }}
        >
          {l}
        </Link>
      ))}
    </Stack>
  )

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: scrolled ? alpha(theme.palette.background.default, 0.92) : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: `1px solid ${scrolled ? theme.palette.divider : 'transparent'}`,
        transition: 'background-color 0.3s ease, border-color 0.3s ease',
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
          component="a"
          href="#"
          sx={{
            fontFamily: theme.custom.mono,
            fontWeight: 700,
            fontSize: 15,
            color: 'primary.main',
            letterSpacing: '-0.02em',
            flexGrow: 1,
            textDecoration: 'none',
          }}
        >
          brian@sec:~$
        </Typography>

        <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 4, mr: 3 }}>
          <NavLinks />
        </Box>

        <Tooltip title={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
          <IconButton
            onClick={toggleMode}
            aria-label={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            size="small"
            sx={{ color: 'text.secondary', mr: 1.5 }}
          >
            {mode === 'dark' ? <LightModeRoundedIcon fontSize="small" /> : <DarkModeRoundedIcon fontSize="small" />}
          </IconButton>
        </Tooltip>

        <Button
          href="mailto:hbrian83@gmail.com"
          variant="outlined"
          size="small"
          sx={{
            display: { xs: 'none', sm: 'inline-flex' },
            fontFamily: theme.custom.mono,
            fontSize: 12,
            color: 'primary.main',
            borderColor: 'primary.main',
            px: 2,
            '&:hover': { bgcolor: 'primary.main', color: theme.palette.primary.contrastText, borderColor: 'primary.main' },
          }}
        >
          hire me
        </Button>

        <IconButton
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation menu"
          sx={{ display: { xs: 'inline-flex', sm: 'none' }, color: 'text.primary' }}
        >
          <MenuRoundedIcon />
        </IconButton>
      </Toolbar>

      <Drawer
        anchor="right"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        slotProps={{
          paper: {
            sx: { width: 260, bgcolor: 'background.paper', p: 3, borderLeft: '1px solid', borderColor: 'divider' },
          },
        }}
      >
        <Stack direction="row" sx={{ justifyContent: 'flex-end', mb: 4 }}>
          <IconButton onClick={() => setMenuOpen(false)} aria-label="Close navigation menu" sx={{ color: 'text.primary' }}>
            <CloseRoundedIcon />
          </IconButton>
        </Stack>
        <NavLinks onClick={() => setMenuOpen(false)} direction="column" spacing={3} />
        <Button
          href="mailto:hbrian83@gmail.com"
          variant="contained"
          sx={{
            mt: 5,
            fontFamily: theme.custom.mono,
            fontSize: 13,
            bgcolor: 'primary.main',
            color: theme.palette.primary.contrastText,
          }}
        >
          hire me
        </Button>
      </Drawer>
    </AppBar>
  )
}
