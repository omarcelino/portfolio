import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'

export default function SectionLabel({ children }) {
  const theme = useTheme()
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
      <Typography
        sx={{
          fontFamily: theme.custom.mono,
          fontSize: 12,
          color: 'primary.main',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}
      >
        {children}
      </Typography>
      <Box sx={{ flex: 1, height: '1px', bgcolor: 'divider' }} />
    </Box>
  )
}
