import styled from '@emotion/styled';
import { COLOR } from './constants/colors';
import { THEME } from './constants/theme';
import { Header } from './components/Header/Header';
import { ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import { Heading } from './components/Heading';
import Box from '@mui/material/Box';
import { TasksList } from './features/TasksList/TasksList';
import { SPACING } from './constants/spacing';
import { Task } from './features/Task/Task';

const AppWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: ${COLOR.bg};
  border-radius: 4px;
  font-size: 24px;
  font-weight: bold;
  color: ${COLOR.text};

`

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <AppWrapper>
        <Header />
        <Grid container spacing={2}>
          <Grid size={3}>
            <Box sx={{ flexDirection: 'column', paddingTop: SPACING.lg }}>
              <Box sx={{ marginLeft: SPACING.md }}>
                <Heading as="h2">Tasks queue</Heading>
              </Box>
              <TasksList />
            </Box>
          </Grid>
          <Grid size={9}>
            <Box sx={{ p: SPACING.lg }}>
              <Task />
            </Box>
          </Grid>
        </Grid>
      </AppWrapper>
    </ThemeProvider>
  )
}

export default App
