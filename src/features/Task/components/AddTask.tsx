import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup
} from "@mui/material"
import TextField from "@mui/material/TextField"
import { useReducer } from "react";
import { AddTaskFormFields } from "./AddTask.types";

type FormActionType = 'titleChange' | 'descriptionChange' | 'timeChange' | 'startNowChange'
type FormAction = { type: FormActionType, payload: Partial<AddTaskFormFields> }

const initialFormValues: AddTaskFormFields = {
  title: '',
  description: '',
  time: 15,
  startNow: true
}

const formReducer = (state: AddTaskFormFields, action: FormAction) => {
  switch (action.type) {
    case 'titleChange':
      return { ...state, title: action.payload.title || initialFormValues.title }
    case 'descriptionChange':
      return { ...state, description: action.payload.description || initialFormValues.description }
    case 'timeChange':
      return { ...state, time: action.payload.time || initialFormValues.time }
    case 'startNowChange':
      return { ...state, startNow: action.payload.startNow || !state.startNow }
    default:
      throw new Error('Unhandled form reducer action')
  }
}

interface AddTaskProps {
  errors: string[]
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => (state: AddTaskFormFields) => void
}

export const AddTask = ({ errors, onSubmit }: AddTaskProps) => {
  const [state, dispatch] = useReducer<React.Reducer<AddTaskFormFields, FormAction>>(
    formReducer, initialFormValues
  )

  console.log({
    state
  })

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'titleChange', payload: { title: e.target.value } })
  }

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'descriptionChange', payload: { description: e.target.value } })
  }

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'timeChange', payload: { time: parseInt(e.target.value) } })
  }

  const handleStartNowChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'startNowChange', payload: { startNow: e.target.checked } })
  }

  return (
    <form noValidate autoComplete="off" onSubmit={(e) => onSubmit(e)(state)}>
      <FormGroup sx={{ gap: 3 }}>
        <TextField
          id="title"
          name="title"
          label="Task title"
          variant="standard"
          required error={errors.includes('title')}
          value={state.title}
          onChange={handleTitleChange}
        />
        <TextField
          id="description"
          name="description"
          label="Task description"
          variant="standard"
          value={state.description}
          onChange={handleDescriptionChange}
        />
        <FormLabel required id="time">Time</FormLabel>
        <RadioGroup
          aria-required
          row
          aria-labelledby="time"
          name="time"
          value={state.time}
          onChange={handleTimeChange}
        >
          <FormControlLabel value="15" control={<Radio />} label="15" />
          <FormControlLabel value="30" control={<Radio />} label="30" />
          <FormControlLabel value="45" control={<Radio />} label="45" />
        </RadioGroup>
        <FormControlLabel
          label="Should start immediatelly?"
          control={
            <Checkbox
              id="startNow"
              name={'startNow'}
              defaultChecked
              value={state.startNow}
              onChange={handleStartNowChange}
            />}
        />
        <Button type="submit">
          Add a task
        </Button>
      </FormGroup>
    </form >
  )
}
