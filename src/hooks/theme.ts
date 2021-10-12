import { Theme } from '@type/context';
import { useState } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState(
    (window.localStorage.getItem('theme') as Theme) ?? Theme.LIGHT
  );
  const setMode = (newTheme: Theme) => {
    window.localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  const themeToggler = () => {
    theme === Theme.LIGHT ? setMode(Theme.DARK) : setMode(Theme.LIGHT);
  };
  return { theme, themeToggler };
};

export default useTheme;
