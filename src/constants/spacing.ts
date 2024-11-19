export const SPACING = {
  xxs: '4px',
  xs: '8px',
  sm: '16px',
  md: '24px',
  lg: '48px',
  xl: '96px',
  xxl: '128px'
} as const

export type FontSize = keyof typeof SPACING

export type FontSizeValue = typeof SPACING[keyof typeof SPACING]