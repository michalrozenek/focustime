import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import { Color, COLOR, ColorValue } from '../constants/colors';
import { FONT_SIZE, FontSize, FontSizeValue } from '../constants/fontSize';

interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3';
  size?: FontSize;
  color?: Color
  children: string;
}

const StyledHeading = styled(Typography) <{ size: FontSizeValue, color?: ColorValue }>`
  color: ${props => props.color};
  font-size: ${props => props.size};
  font-weight: bold;
`

const fontSize = {
  h1: FONT_SIZE.xl,
  h2: FONT_SIZE.lg,
  h3: FONT_SIZE.md
}

export const Heading = ({ as = 'h2', children, size, color }: HeadingProps) =>
  <StyledHeading
    color={COLOR[color || 'text']}
    variant={as}
    size={size ? FONT_SIZE[size] : fontSize[as]}>
    {children}
  </StyledHeading>