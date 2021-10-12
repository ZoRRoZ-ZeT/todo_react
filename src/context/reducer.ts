import {
  ContextActions,
  ContextActionType,
  ContextStateType,
} from '@type/context';

export const contextReducer = (
  state: ContextStateType,
  action: ContextActions
) => {
  switch (action.type) {
    case ContextActionType.SET_LANGUAGE: {
      window.localStorage.setItem('language', action.payload.language);
      return {
        ...state,
        language: action.payload.language,
      };
    }
    case ContextActionType.SET_THEME: {
      window.localStorage.setItem('theme', action.payload.theme);
      return {
        ...state,
        theme: action.payload.theme,
      };
    }
    default: {
      return state;
    }
  }
};
