import { Priority } from '@type/index.types';

export interface Task {
  id: string;
  value: string;
  isChecked: boolean;
  priority: Priority;
  sort: number;
}

export interface TodoState {
  list: Task[];
}
