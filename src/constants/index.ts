import { Priority, Status } from '@type/index.types';

export const mapPriorities: Record<Priority, string> = {
  [Priority.HIGH]: '#ff110099',
  [Priority.MEDIUM]: '#ffe50080',
  [Priority.LOW]: '#89ff00d9',
  [Priority.NONE]: '#ffffff',
};

export const mapPath: Record<string, Status> = {
  '/active': Status.ACTIVE,
  '/completed': Status.COMPLETED,
};
