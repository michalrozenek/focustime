import { Button, FormControlLabel, FormGroup, FormHelperText, FormLabel, Radio, RadioGroup } from "@mui/material"
import TextField from "@mui/material/TextField"

interface AddTaskProps {
  errors: string[]
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export const AddTask = ({ errors, onSubmit }: AddTaskProps) => {
  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <FormGroup sx={{ gap: 3 }}>
        <TextField id="title" label="Task title" variant="standard" required error={errors.includes('title')} />
        <TextField id="description" label="Task description" variant="standard" />
        <FormLabel required id="time">Time</FormLabel>
        <RadioGroup
          aria-required
          row
          aria-labelledby="time"
          name="time"
        >
          <FormControlLabel value="15" control={<Radio />} label="15" />
          <FormControlLabel value="30" control={<Radio />} label="30" />
          <FormControlLabel value="45" control={<Radio />} label="45" />
        </RadioGroup>
        <Button type="submit">
          Add a task
        </Button>
      </FormGroup>
    </form >
  )
}
