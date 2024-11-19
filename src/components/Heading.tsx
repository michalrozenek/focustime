import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import { COLORS } from '../constants/colors';
import { FONT_SIZE, FontSize, FontSizeValue } from '../constants/fontSize';

interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3';
  size?: FontSize;
  children: string;
}

const StyledHeading = styled(Typography) <{ size: FontSizeValue }>`
  color: ${COLORS.text};
  font-size: ${props => props.size};
  font-weight: bold;
`

const fontSize = {
  h1: FONT_SIZE.xl,
  h2: FONT_SIZE.lg,
  h3: FONT_SIZE.md
}

export const Heading = ({ as = 'h2', children, size }: HeadingProps) => <StyledHeading variant={as} size={size ? FONT_SIZE[size] : fontSize[as]}>
  {children}
</StyledHeading>