import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddTask, Task } from "./tasks.types";

type TaskState = 'add' | 'ready' | 'run' | 'done'

interface TasksState {
  currentTask: Task | null,
  tasks: Task[],
  phase: TaskState
}

const initialState: TasksState = {
  currentTask: null,
  tasks: [],
  phase: 'add'
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<{ task: AddTask }>) {
      const task: Task = {
        ...action.payload.task,
        id_task: Math.floor(Math.random() * 100000),
        rounds: 1,
      }
      state.tasks.push(task)
    },
    addTaskAndStart(state, action: PayloadAction<{ task: AddTask }>) {
      const task: Task = {
        ...action.payload.task,
        id_task: Math.floor(Math.random() * 100000),
        rounds: 1,
        startDate: Date.now()
      }
      state.phase = 'run'
      state.tasks.push(task)
      state.currentTask = task
    },
    startTask(state, action: PayloadAction<{ id_task: number }>) {
      const currentTask = state.tasks.find((task) => task.id_task === action.payload.id_task)
      if (currentTask) {
        currentTask.startDate = Date.now()
        state.currentTask = currentTask
        state.phase = 'run'
      }
    },
    finishTask(state, action: PayloadAction<{ id_task: number }>) {
      const currentTask = state.tasks.find((task) => task.id_task === action.payload.id_task)
      if (currentTask) {
        currentTask.endDate = Date.now()
        state.currentTask = null
        state.phase = 'add' // get back to add state
      }
    },
    removeTask(state, action: PayloadAction<{ id_task: number }>) {
      const tasks = state.tasks.filter((task) => task.id_task !== action.payload.id_task)
      state.tasks = tasks
    },
    setCurrentTask(state, action: PayloadAction<{ id_task: number }>) {
      const current = state.tasks.find((task) => task.id_task === action.payload.id_task)
      state.currentTask = current || null
      state.phase = 'ready'
    }
  }
})

export const {
  addTask,
  addTaskAndStart,
  finishTask,
  removeTask,
  setCurrentTask,
  startTask
} = tasksSlice.actions

export default tasksSlice.reducer