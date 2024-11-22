import Typography from '@mui/material/Typography';
import { Color, COLOR } from '../constants/colors';
import { FONT_SIZE, FontSize,  } from '../constants/fontSize';
import { ComponentProps } from 'react';

interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3';
  size?: FontSize;
  color?: Color;
  children: string;
  sx?: ComponentProps<typeof Typography>['sx']
}

const fontSize = {
  h1: FONT_SIZE.xl,
  h2: FONT_SIZE.lg,
  h3: FONT_SIZE.md
}

export const Heading = ({ as = 'h2', children, size, color = 'text', sx }: HeadingProps) =>
  <Typography
    variant={as}
    sx={{
      color: COLOR[color],
      fontSize: size ? FONT_SIZE[size] : fontSize[as],
      fontWeight: 600,
      ...sx,
    }}
    >
    {children}
  </Typography>
