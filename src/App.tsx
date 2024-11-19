
import Button from '@mui/material/Button';
import { Heading } from './components/Heading';
import styled from '@emotion/styled';
import { COLORS } from './constants/colors';

const AppWrapper = styled.button`
  min-height: 100vh;
  width: 100%;
  height: 100%;
  padding: 32px;
  margin: 0;
  background-color: ${COLORS.bg};
  border-radius: 4px;
  font-size: 24px;
  font-weight: bold;
  color: ${COLORS.text};

`

function App() {
  return (
    <AppWrapper>
      <Heading>
        Hello there
      </Heading>
      <Button variant="contained">Hello world</Button>
    </AppWrapper>
  )
}

export default App
