import { Reducer } from 'redux';

import { loginAction, logoutAction, registerAction } from '@store/actions/user';
import { FailedUserType, SuccessUserType } from '@type/actions/actions';
import { UserState } from '@type/user';

const initialState: UserState = {
  isAuth: window.localStorage.getItem('token') ? true : false,
  error: '',
};

type ActionUserType = SuccessUserType | FailedUserType;

const reducer: Reducer<UserState, ActionUserType> = (
  state: UserState = initialState,
  action: ActionUserType
) => {
  switch (action.type) {
    case registerAction.types.SUCCESS: {
      const accessToken = action.payload.response;
      window.localStorage.setItem('token', accessToken);
      return state;
    }
    case loginAction.types.SUCCESS: {
      const accessToken = action.payload.response;
      window.localStorage.setItem('token', accessToken);
      return {
        ...state,
        isAuth: true,
        error: '',
      };
    }
    case logoutAction.types.SUCCESS: {
      window.localStorage.removeItem('token');
      return {
        ...state,
        isAuth: false,
      };
    }
    case loginAction.types.FAILED: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
};

export default reducer;
