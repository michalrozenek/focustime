export interface Task {
  id_task: number;
  title: string;
  time: number;
  description?: string;
  startDate?: number;
  endDate?: number;
  rounds: number;
}

export type AddTask = Pick<Task, 'title' | 'description' | 'time'>