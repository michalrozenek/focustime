import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import { SPACING } from "../../constants/spacing"
import { useAppDispatch, useAppSelector } from "../../store/store.hooks."
import { setCurrentTask } from "../../store/tasks.slice"

export const TasksList = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks)
  const dispatch = useAppDispatch()

  const selectTask = (id_task: number) => dispatch(setCurrentTask({ id_task }))

  const tasksInQueue = tasks.filter((task) => !task.endDate)

  return (
    <List sx={{ flex: 1 }}>
      {tasksInQueue.map((task) => (
        <ListItemButton
          key={task.id_task}
          component="button"
          onClick={() => selectTask(task.id_task)}
          sx={{ width: '100%', px: SPACING.lg }}
        >
          <ListItemText primary={task.title} />
        </ListItemButton>
      ))}
    </List>
  )
}