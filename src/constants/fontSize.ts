export const FONT_SIZE = {
  xs: '8px',
  s: '12p',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '48px'
} as const

export type FontSize = keyof typeof FONT_SIZE

export type FontSizeValue = typeof FONT_SIZE[keyof typeof FONT_SIZE]