import { createTheme } from '@mui/material/styles';
import { blueGrey, deepOrange, red, grey } from '@mui/material/colors';

export const THEME = createTheme({
  palette: {
    primary: {
      light: red[200],
      main: red[300],
      dark: red[400],
      contrastText: grey[900],
    },
    secondary: {
      light: blueGrey[200],
      main: blueGrey[300],
      dark: blueGrey[500],
      contrastText: grey[900],
    },
  },
});

// primary
// secondary
// error
// warning
// info
// success
// mode
// tonalOffset
// contrastThreshold
// common
// grey
// text
// divider
// action
// background