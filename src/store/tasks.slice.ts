import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddTask, Task } from "./tasks.types";

interface TasksState {
  currentTask: Task | null,
  tasks: Task[],
}

const initialState: TasksState = {
  currentTask: null,
  tasks: []
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
      state.tasks.push(task)
      state.currentTask = task
    },
    removeTask(state, action: PayloadAction<{ id_task: number }>) {
      const tasks = state.tasks.filter((task) => task.id_task !== action.payload.id_task)
      state.tasks = tasks
    },
    setCurrentTask(state, action: PayloadAction<{ id_task: number }>) {
      const current = state.tasks.find((task) => task.id_task === action.payload.id_task)
      state.currentTask = current || null
    }
  }
})

export const { addTask, addTaskAndStart, removeTask, setCurrentTask } = tasksSlice.actions

export default tasksSlice.reducer