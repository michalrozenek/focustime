import Box from "@mui/material/Box";

import { Counter } from "../../components/Counter/Counter";
import { Heading } from "../../components/Heading";
import { SPACING } from "../../constants/spacing";
import { AddTask } from "./components/AddTask";
import { useState } from "react";

interface Task {
  title: string;
  description: string;
  time: number;
}

interface TaskProps {
  title?: string;
  timeInMinutes?: number;
}

export const Task = ({
  title,
  timeInMinutes = 0
}: TaskProps) => {
  const [currentTask, setCurrentTaks] = useState<Task | null>(null)
  const [submitErrors, setSubmitErrors] = useState<string[]>([])

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const title = e.target.elements['title'].value
    if (!title) {
      return setSubmitErrors(['title'])
    }

    const task = {
      title: e.target.elements['title'].value,
      description: e.target.elements['description'].value,
      time: e.target.elements['time'].value
    }
    setSubmitErrors([])
    setCurrentTaks(task)
  }

  return (
    <Box>
      <Heading>Current task</Heading>
      <Heading as="h3">{currentTask?.title || ''}</Heading>
      <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', py: SPACING.xl, px: SPACING.xl }}>
        <Counter timeInMinutes={timeInMinutes} />
        {!title && (
          <AddTask errors={submitErrors} onSubmit={onSubmit} />
        )}
      </Box>
    </Box>
  )
}