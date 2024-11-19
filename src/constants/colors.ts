import { blueGrey, deepOrange, red, grey } from '@mui/material/colors';

export const COLOR = {
  bg: '#EAD2AD',
  accent: deepOrange[200],
  text: grey[900],
  contrast: grey[900],
  primary: red[300],
  secondary: deepOrange[300],
} as const

export type Color = keyof typeof COLOR

export type ColorValue = typeof COLOR[keyof typeof COLOR]

// bg: '#EAD2AD',
// accent: '#99B3B9',
// text: '#566263',
// primary: '#DA5C56',
// secondary: '#E3826F'