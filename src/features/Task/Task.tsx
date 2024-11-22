import Box from "@mui/material/Box";

import { useState } from "react";
import { Counter } from "../../components/Counter/Counter";
import { Heading } from "../../components/Heading";
import { SPACING } from "../../constants/spacing";
import { useAppDispatch, useAppSelector } from "../../store/store.hooks.";
import { addTask, addTaskAndStart, finishTask, startTask } from "../../store/tasks.slice";
import { AddTask } from "./components/AddTask";
import { AddTaskFormFields } from "./components/AddTask.types";
import { Button } from "@mui/material";

export const Task = () => {
  const [submitErrors, setSubmitErrors] = useState<string[]>([])
  const currentTask = useAppSelector((state) => state.tasks.currentTask)
  const phase = useAppSelector((state) => state.tasks.phase)

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
    return fields.startNow
      ? dispatch(addTaskAndStart({ task }))
      : dispatch(addTask({ task }))
  }

  const handleOnStart = () => {
    if (!currentTask) return
    dispatch(startTask({id_task: currentTask?.id_task}))
  }

  const handleOnFinish = () => {
    if (!currentTask) return
    dispatch(finishTask({id_task: currentTask?.id_task}))
  }


  return (
    <Box>
      <Heading>Current task</Heading>
      <Heading
        as="h3"
        sx={{ fontWeight: 400}}
      >
        {currentTask?.title || 'Select the task or create a new one'}
      </Heading>
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          py: SPACING.xl,
          px: SPACING.xl
        }}>
        <Counter
          automaticStart={phase === 'run'}
          timeInMinutes={currentTask?.time || 0}
          showStartButton={phase === 'ready'}
          onStart={handleOnStart}
        />
      </Box>
      {phase === 'add' && (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3}}>
          <Heading>Add task</Heading>
          <AddTask errors={submitErrors} onSubmit={onSubmit} />
        </Box>
      )}
      {phase === 'ready' && (
        <Button variant="contained" fullWidth onClick={handleOnStart}>
          Start
        </Button>
      )}
      {phase === 'run' && (
        <Box sx={{ display: 'flex', gap: 3}}>
          <Button variant="contained" fullWidth onClick={handleOnFinish}>
            Finish
          </Button>
          <Button variant="outlined" fullWidth>
            Repeat
          </Button>
          <Button variant="outlined" fullWidth>
            Move back to queue
          </Button>
        </Box>
      )}
    </Box>
  )
}