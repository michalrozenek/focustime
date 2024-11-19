import Box from '@mui/material/Box';
import { Text } from '../Text'
import { useCounter } from "./useCounter";
import Fab from "@mui/material/Fab";
import Plus from '@mui/icons-material/PlusOne';
import AddIcon from '@mui/icons-material/Add';

interface CounterProps {
  timeInMinutes: number
}

export const Counter = ({
  timeInMinutes
}: CounterProps) => {
  const { seconds, increase, decrease } = useCounter({ timeInMinutes })

  const formatTime = (timeUnit: number) => {
    if (timeUnit <= 9) return `0${timeUnit}`
    return timeUnit
  }

  const getTime = () => {
    const s = seconds % 60
    const m = Math.floor(seconds / 60)

    return `${formatTime(m)} : ${formatTime(s)}`
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 3 }}>
      <Fab color="primary" aria-label="reduce" size="medium" onClick={decrease}>
        <Text>-5</Text>
      </Fab>
      <Text size="xxl">
        {getTime()}
      </Text >
      <Fab color="primary" aria-label="add" size="medium" onClick={increase}>
        <Text>+5</Text>
      </Fab>
    </Box>
  )
}