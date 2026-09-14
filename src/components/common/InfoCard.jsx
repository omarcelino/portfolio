import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'

// Shared surface for the About "highlights" list and Contact "channels" list.
export default function InfoCard({ icon: Icon, eyebrow, title, subtitle, href, external = false }) {
  const theme = useTheme()
  const interactive = Boolean(href)

  return (
    <Paper
      component={interactive ? 'a' : 'div'}
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      variant="outlined"
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 1.75,
        bgcolor: 'background.default',
        borderColor: 'divider',
        p: '1.1rem 1.35rem',
        color: 'text.primary',
        textDecoration: 'none',
        transition: 'border-color 0.2s ease, transform 0.2s ease',
        cursor: interactive ? 'pointer' : 'default',
        '&:hover': interactive ? { borderColor: 'primary.main', transform: 'translateY(-2px)' } : undefined,
      }}
    >
      {Icon && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 36,
            height: 36,
            borderRadius: '10px',
            bgcolor: theme.custom.primaryContainer,
            color: 'primary.main',
            flexShrink: 0,
          }}
        >
          <Icon sx={{ fontSize: 20 }} />
        </Box>
      )}
      <Box sx={{ minWidth: 0 }}>
        {eyebrow && (
          <Typography
            sx={{
              fontFamily: theme.custom.mono,
              fontSize: 11,
              color: 'primary.main',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              mb: 0.375,
            }}
          >
            {eyebrow}
          </Typography>
        )}
        <Typography sx={{ fontFamily: theme.custom.mono, fontSize: 14, fontWeight: 500, wordBreak: 'break-word' }}>
          {title}
        </Typography>
        {subtitle && (
          <Typography sx={{ fontSize: 13, color: 'text.secondary', mt: 0.375 }}>{subtitle}</Typography>
        )}
      </Box>
    </Paper>
  )
}
