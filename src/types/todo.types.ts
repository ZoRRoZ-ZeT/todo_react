import { Priority } from '@type/index.types';

export interface Task {
  id: string;
  value: string;
  isChecked: boolean;
  priority: Priority;
}

export interface TodoState {
  list: Task[];
}
