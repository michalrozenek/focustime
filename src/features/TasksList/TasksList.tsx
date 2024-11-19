import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import { SPACING } from "../../constants/spacing"

export const TasksList = () => {
  const tasks: { idTask: string, title: string }[] = [
    {
      idTask: '123',
      title: 'Code website',
    },
    {
      idTask: '345',
      title: 'Design'
    }
  ] // use redux instead

  const selectTask = () => console.log('select task')

  return (
    <List sx={{ flex: 1 }}>
      {tasks.map((task) => (
        <ListItemButton
          key={task.idTask}
          component="button"
          onClick={selectTask}
          sx={{ width: '100%', px: SPACING.lg }}
        >
          <ListItemText primary={task.title} />
        </ListItemButton>
      ))}
    </List>
  )
}