import Box from '@mui/material/Box';
import Fab from "@mui/material/Fab";
import { Text } from '../Text';
import { useCounter } from "./useCounter";
import { Button } from '@mui/material';
import { useEffect } from 'react';

interface CounterProps {
  automaticStart: boolean
  timeInMinutes: number
  showStartButton: boolean
  onStart: () => void
}

export const Counter = ({
  automaticStart = false,
  timeInMinutes,
  showStartButton = false,
  onStart
}: CounterProps) => {
  const { seconds, increase, decrease, start } = useCounter({ timeInMinutes })

  const formatTime = (timeUnit: number) => {
    if (timeUnit <= 9) return `0${timeUnit}`
    return timeUnit
  }

  const getTime = () => {
    const s = seconds % 60
    const m = Math.floor(seconds / 60)

    return `${formatTime(m)} : ${formatTime(s)}`
  }

  const startCounter = () => {
    onStart()
    start()
  }

  useEffect(() => {
    if (automaticStart) startCounter()
  }, [automaticStart])

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 3
      }}>
      <Fab color="primary" aria-label="reduce time" size="small" onClick={decrease}>
        <Text size="lg">-</Text>
      </Fab>
      <Text size="xxl">
        {getTime()}
      </Text >
      <Fab color="primary" aria-label="add time" size="small" onClick={increase}>
        <Text size="lg">+</Text>
      </Fab>
      {showStartButton && (
        <Button onClick={startCounter}>
          start
        </Button>
      )}
    </Box>
  )
}