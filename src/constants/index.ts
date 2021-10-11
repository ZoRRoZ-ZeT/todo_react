import { Priority, Status } from '@type/index.types';
import { Task } from '@type/todo.types';

export const mapPriorities: Record<Priority, string> = {
  [Priority.HIGH]: '#ff110099',
  [Priority.MEDIUM]: '#ffe50080',
  [Priority.LOW]: '#89ff00d9',
  [Priority.NONE]: '#ffffff',
};

export const mapStatusToFilterPredicate: {
  [x in Status]: (item: Task) => boolean;
} = {
  [Status.ACTIVE]: (item) => item.isChecked === false,
  [Status.COMPLETED]: (item) => item.isChecked === true,
  [Status.ALL]: null,
};

export const mapPath: Record<string, Status> = {
  '/active': Status.ACTIVE,
  '/completed': Status.COMPLETED,
};

export const mapPrioritiesOrder: Record<Priority, number> = {
  [Priority.HIGH]: 0,
  [Priority.MEDIUM]: 1,
  [Priority.LOW]: 2,
  [Priority.NONE]: 3,
};
