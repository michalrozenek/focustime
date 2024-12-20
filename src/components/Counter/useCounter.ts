import { useEffect, useRef, useState } from "react"

const timeChange = 5 * 60 // seconds

interface UseCounterProps {
  timeInMinutes: number
}

export const useCounter = ({ timeInMinutes }: UseCounterProps) => {
  const [seconds, setSeconds] = useState(0)

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startInterval = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setSeconds(prev => prev - 1);
      }, 1000);
    }
  };

  const stopInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const increase = () => {
    setSeconds(prev => prev + timeChange);
    startInterval(); // Restart the interval if it was stopped
  };

  const decrease = () => {
    setSeconds(prev => {
      if (prev > 60) {
        return prev - timeChange;
      }
      return 0;
    });
    startInterval(); // Restart the interval if it was stopped
  };

  const start = () => {
    startInterval(); // Start interval on mount
  }

  useEffect(() => {
    if (seconds <= 0) {
      setSeconds(0);
      stopInterval();
    }
  }, [seconds]);

  useEffect(() => {
    setSeconds(timeInMinutes * 60)

    return () => {
      stopInterval(); // Cleanup on unmount
    };
  }, [timeInMinutes]);

  return {
    seconds,
    increase,
    decrease,
    start,
  }
}