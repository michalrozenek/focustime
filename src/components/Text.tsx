import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import { Color, COLOR, ColorValue } from '../constants/colors';
import { FONT_SIZE, FontSize, FontSizeValue } from '../constants/fontSize';

interface TextProps {
  as?: 'body1' | 'body2';
  size?: FontSize;
  color?: Color
  children: string;
}

const StyledText = styled(Typography) <{ size: FontSizeValue, color?: ColorValue }>`
  color: ${props => props.color};
  font-size: ${props => props.size};
  font-weight: bold;
`

export const Text = ({ as = 'body1', children, size = 'md', color }: TextProps) =>
  <StyledText
    color={COLOR[color || 'text']}
    variant={as}
    size={FONT_SIZE[size]}>
    {children}
  </StyledText>