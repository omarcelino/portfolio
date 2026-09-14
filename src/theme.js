import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0D1117',
      paper: '#161B22',
    },
    primary: {
      main: '#00D4AA',
      contrastText: '#000000',
    },
    text: {
      primary: '#E6EDF3',
      secondary: '#8B949E',
    },
    divider: '#30363D',
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 16,
  },
  shape: {
    borderRadius: 8,
  },
  custom: {
    mono: "'JetBrains Mono', monospace",
    teal: '#00D4AA',
    tealDim: 'rgba(0,212,170,0.12)',
    tealBorder: 'rgba(0,212,170,0.3)',
    bg: '#0D1117',
    bg2: '#161B22',
    bg3: '#21262D',
    border: '#30363D',
    muted: '#8B949E',
    maxWidth: 1100,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: 'smooth' },
        body: { WebkitFontSmoothing: 'antialiased' },
        '::selection': { background: '#00D4AA', color: '#000' },
        '::-webkit-scrollbar': { width: 6 },
        '::-webkit-scrollbar-track': { background: '#0D1117' },
        '::-webkit-scrollbar-thumb': { background: '#30363D', borderRadius: 3 },
        a: { color: '#00D4AA', textDecoration: 'none' },
        '@media (prefers-reduced-motion: reduce)': {
          '*, *::before, *::after': {
            animationDuration: '0.01ms !important',
            transitionDuration: '0.01ms !important',
          },
        },
      },
    },
  },
})

export default theme
