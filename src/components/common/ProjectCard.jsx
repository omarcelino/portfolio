import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Link from '@mui/material/Link'
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded'
import { useTheme } from '@mui/material/styles'

export default function ProjectCard({ icon: Icon, title, tag, desc, link, linkLabel }) {
  const theme = useTheme()
  return (
    <Paper
      variant="outlined"
      sx={{
        bgcolor: 'background.default',
        borderColor: 'divider',
        p: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: 1.5,
        height: '100%',
        transition: 'border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease',
        '&:hover': {
          borderColor: 'primary.main',
          transform: 'translateY(-4px)',
          boxShadow: `0 8px 24px -12px ${theme.palette.primary.main}33`,
        },
      }}
    >
      <Stack direction="row" spacing={1} sx={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Stack direction="row" spacing={1.25} sx={{ alignItems: 'center' }}>
          {Icon && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 32,
                height: 32,
                borderRadius: '8px',
                bgcolor: theme.custom.primaryContainer,
                color: 'primary.main',
                flexShrink: 0,
              }}
            >
              <Icon sx={{ fontSize: 18 }} />
            </Box>
          )}
          <Typography sx={{ fontFamily: theme.custom.mono, fontSize: 15, fontWeight: 500 }}>{title}</Typography>
        </Stack>
        <Chip
          label={tag}
          size="small"
          sx={{
            fontFamily: theme.custom.mono,
            fontSize: 10,
            color: 'primary.main',
            bgcolor: theme.custom.primaryContainer,
            border: `1px solid ${theme.palette.primary.main}4d`,
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        />
      </Stack>
      <Typography sx={{ fontSize: 13, color: 'text.secondary', lineHeight: 1.7, flex: 1 }}>{desc}</Typography>
      {link && (
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            fontFamily: theme.custom.mono,
            fontSize: 12,
            color: 'primary.main',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.5,
            width: 'fit-content',
            '&:hover': { textDecoration: 'underline' },
          }}
        >
          {linkLabel}
          <ArrowOutwardRoundedIcon sx={{ fontSize: 14 }} />
        </Link>
      )}
    </Paper>
  )
}
