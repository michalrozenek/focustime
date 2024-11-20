import Box from "@mui/material/Box";

import { useState } from "react";
import { Counter } from "../../components/Counter/Counter";
import { Heading } from "../../components/Heading";
import { SPACING } from "../../constants/spacing";
import { useAppDispatch, useAppSelector } from "../../store/store.hooks.";
import { addTask } from "../../store/tasks.slice";
import { AddTask } from "./components/AddTask";
import { AddTaskFormFields } from "./components/AddTask.types";

export const Task = () => {
  const [submitErrors, setSubmitErrors] = useState<string[]>([])
  const currentTask = useAppSelector((state) => state.tasks.currentTask)

  const dispatch = useAppDispatch()

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => (fields: AddTaskFormFields) => {
    e.preventDefault()

    const title = fields.title

    if (!title) {
      return setSubmitErrors(['title'])
    }

    const task = {
      title: fields.title,
      description: fields.description,
      time: fields.time,
      startDate: fields.startNow ? Date.now() : undefined
    }

    setSubmitErrors([])
    dispatch(addTask({ task }))
  }

  return (
    <Box>
      <Heading>Current task</Heading>
      <Heading as="h3">{currentTask?.title || ''}</Heading>
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          py: SPACING.xl,
          px: SPACING.xl
        }}>
        <Counter timeInMinutes={currentTask?.time || 0} />
        {!currentTask && (
          <AddTask errors={submitErrors} onSubmit={onSubmit} />
        )}
      </Box>
    </Box>
  )
}