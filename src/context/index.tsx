import React, { useReducer } from 'react';

import {
  ContextActions,
  ContextStateType,
  Language,
  Theme,
} from '@type/context';
import useTheme from '@hooks/theme';

import { contextReducer } from './reducer';

const initialState: ContextStateType = {
  language:
    (window.localStorage.getItem('language') as Language) ?? Language.EN,
};

const AppContext = React.createContext<{
  state: ContextStateType;
  dispatch: React.Dispatch<ContextActions>;
  theme: Theme;
  themeToggler: () => void;
}>({
  state: initialState,
  dispatch: () => null,
  theme: null,
  themeToggler: () => null,
});

const ContextProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(contextReducer, initialState);
  const { theme, themeToggler } = useTheme();
  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
        theme,
        themeToggler,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export { ContextProvider, AppContext };
