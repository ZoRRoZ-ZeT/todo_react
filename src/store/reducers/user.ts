import {
  loginAction,
  logoutAction,
  registerAction,
} from '@store/actions/tasks';
import { FailedUserType, SuccessUserType } from '@type/action';
import { UserState } from '@type/user';
import { Reducer } from 'redux';

const initialState: UserState = {
  isAuth: window.localStorage.getItem('token') ? true : false,
};

type ActionUserType = SuccessUserType | FailedUserType;

const reducer: Reducer<UserState, ActionUserType> = (
  state: UserState = initialState,
  action: ActionUserType
) => {
  switch (action.type) {
    case registerAction.types.SUCCESS:
    case loginAction.types.SUCCESS: {
      const accessToken = action.payload.response;
      window.localStorage.setItem('token', accessToken);
      return {
        isAuth: true,
      };
    }
    case logoutAction.types.SUCCESS: {
      window.localStorage.removeItem('token');
      return {
        isAuth: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
