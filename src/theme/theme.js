import { createTheme, alpha } from '@mui/material/styles'
import { getDesignTokens } from './tokens'

export default function buildTheme(mode) {
  const t = getDesignTokens(mode)

  return createTheme({
    palette: {
      mode,
      background: { default: t.background, paper: t.surface },
      primary: { main: t.primary, contrastText: t.onPrimary },
      secondary: { main: t.secondary, contrastText: t.onSecondary },
      success: { main: t.success },
      warning: { main: t.warning },
      error: { main: t.error },
      text: { primary: t.onSurface, secondary: t.onSurfaceVariant, disabled: t.muted },
      divider: t.outline,
    },
    typography: {
      fontFamily: t.sans,
      fontSize: 16,
      h1: { fontFamily: t.mono, fontWeight: 700 },
      h2: { fontFamily: t.mono, fontWeight: 700, fontSize: 28 },
      h3: { fontFamily: t.mono, fontWeight: 600 },
      button: { fontFamily: t.mono, textTransform: 'none', fontWeight: 600 },
    },
    shape: { borderRadius: t.radius },
    custom: {
      mono: t.mono,
      maxWidth: t.maxWidth,
      surfaceContainer: t.surfaceContainer,
      surfaceContainerHigh: t.surfaceContainerHigh,
      surfaceContainerHighest: t.surfaceContainerHighest,
      primaryContainer: t.primaryContainer,
      onPrimaryContainer: t.onPrimaryContainer,
      secondaryContainer: t.secondaryContainer,
      onSecondaryContainer: t.onSecondaryContainer,
      outlineVariant: t.outlineVariant,
      muted: t.muted,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: { scrollBehavior: 'smooth' },
          body: { WebkitFontSmoothing: 'antialiased' },
          '::selection': { background: t.primary, color: t.onPrimary },
          '::-webkit-scrollbar': { width: 6 },
          '::-webkit-scrollbar-track': { background: t.background },
          '::-webkit-scrollbar-thumb': { background: t.outline, borderRadius: 3 },
          a: { color: t.primary, textDecoration: 'none' },
          '@media (prefers-reduced-motion: reduce)': {
            '*, *::before, *::after': {
              animationDuration: '0.01ms !important',
              transitionDuration: '0.01ms !important',
              scrollBehavior: 'auto !important',
            },
          },
        },
      },
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          root: {
            borderRadius: 8,
            fontSize: 14,
            transition: 'transform 0.15s ease, background-color 0.2s ease, border-color 0.2s ease',
            '&:hover': { transform: 'scale(1.02)' },
            '&:active': { transform: 'scale(0.99)' },
          },
          containedPrimary: {
            '&:hover': { backgroundColor: t.primary, opacity: 0.88, transform: 'scale(1.02)' },
          },
          outlined: {
            borderColor: t.outline,
            '&:hover': { borderColor: t.primary, backgroundColor: alpha(t.primary, 0.06) },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 6,
            fontSize: 12,
            height: 'auto',
            backgroundColor: t.surfaceContainerHigh,
            color: t.onSurfaceVariant,
          },
          label: { paddingLeft: 8, paddingRight: 8, paddingTop: 3, paddingBottom: 3 },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: { backgroundImage: 'none' },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            transition: 'transform 0.15s ease, color 0.2s ease',
            '&:hover': { transform: 'scale(1.06)' },
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            fontFamily: t.mono,
            fontSize: 11,
            backgroundColor: t.surfaceContainerHigh,
            color: t.onSurface,
            border: `1px solid ${t.outline}`,
          },
        },
      },
    },
  })
}
