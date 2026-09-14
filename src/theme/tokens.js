// Centralized Material 3-inspired design tokens for the cybersecurity color system.
// Dark is the primary/default brand mode; light is structured for future use.

const shared = {
  mono: "'JetBrains Mono', monospace",
  sans: "'Inter', sans-serif",
  maxWidth: 1100,
  radius: 14,
}

const darkTokens = {
  primary: '#3B82F6',
  onPrimary: '#F8FAFC',
  primaryContainer: 'rgba(59, 130, 246, 0.16)',
  onPrimaryContainer: '#93C5FD',

  secondary: '#06B6D4',
  onSecondary: '#0B1220',
  secondaryContainer: 'rgba(6, 182, 212, 0.14)',
  onSecondaryContainer: '#67E8F9',

  success: '#22C55E',
  warning: '#F59E0B',
  error: '#EF4444',

  background: '#0B1220',
  surface: '#111827',
  surfaceContainer: '#172033',
  surfaceContainerHigh: '#1E293B',
  surfaceContainerHighest: '#27364D',

  onSurface: '#F8FAFC',
  onSurfaceVariant: '#CBD5E1',
  muted: '#94A3B8',

  outline: '#1E293B',
  outlineVariant: 'rgba(148, 163, 184, 0.14)',
}

const lightTokens = {
  primary: '#2563EB',
  onPrimary: '#FFFFFF',
  primaryContainer: 'rgba(37, 99, 235, 0.10)',
  onPrimaryContainer: '#1D4ED8',

  secondary: '#0891B2',
  onSecondary: '#FFFFFF',
  secondaryContainer: 'rgba(8, 145, 178, 0.10)',
  onSecondaryContainer: '#0E7490',

  success: '#16A34A',
  warning: '#D97706',
  error: '#DC2626',

  background: '#F8FAFC',
  surface: '#FFFFFF',
  surfaceContainer: '#F1F5F9',
  surfaceContainerHigh: '#E2E8F0',
  surfaceContainerHighest: '#CBD5E1',

  onSurface: '#0B1220',
  onSurfaceVariant: '#334155',
  muted: '#64748B',

  outline: '#E2E8F0',
  outlineVariant: 'rgba(51, 65, 85, 0.12)',
}

export function getDesignTokens(mode) {
  const color = mode === 'light' ? lightTokens : darkTokens
  return { ...shared, ...color }
}
