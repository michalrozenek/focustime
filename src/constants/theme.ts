import { createTheme } from '@mui/material/styles';
import { blueGrey, grey } from '@mui/material/colors';

export const THEME = createTheme({
  palette: {
    primary: {
      light: blueGrey[200],
      main: blueGrey[300],
      dark: blueGrey[400],
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