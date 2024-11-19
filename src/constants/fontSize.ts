export const FONT_SIZE = {
  xs: '8px',
  sm: '12p',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '96px'
} as const

export type FontSize = keyof typeof FONT_SIZE

export type FontSizeValue = typeof FONT_SIZE[keyof typeof FONT_SIZE]