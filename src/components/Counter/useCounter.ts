import { useEffect, useState } from "react"

const timeChange = 5 * 60 // seconds

let interval: ReturnType<typeof setTimeout>

interface UseCounterProps {
  timeInMinutes: number
}

export const useCounter = ({ timeInMinutes }: UseCounterProps) => {
  const [seconds, setSeconds] = useState(timeInMinutes * 60)

  const increase = () => {
    setSeconds(prev => prev + timeChange)
  }

  const decrease = () => {
    setSeconds(prev => {
      if (prev > 60) {
        return prev - timeChange
      }
      return 0
    })
  }

  useEffect(() => {
    if (seconds <= 0) {
      setSeconds(0)
      clearInterval(interval)
    }
  }, [seconds])

  useEffect(() => {
    interval = setInterval(() => {
      setSeconds(prev => prev - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return {
    seconds,
    increase,
    decrease,
  }
}