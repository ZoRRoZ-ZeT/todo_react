import { createAsyncAction } from '@type/action';

export const registerAction = createAsyncAction<
  'REGISTER',
  {
    email: string;
    password: string;
  },
  { response: string },
  { error: string }
>('REGISTER');

export const loginAction = createAsyncAction<
  'LOGIN',
  {
    email: string;
    password: string;
  },
  { response: string },
  { error: string }
>('LOGIN');

export const logoutAction = createAsyncAction<
  'LOGOUT',
  null,
  null,
  { error: string }
>('LOGOUT');
