import { createTheme, Theme } from '@material-ui/core';
import { Theme as ThemeType } from '@type/context';
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
  all: Status.ALL,
  active: Status.ACTIVE,
  completed: Status.COMPLETED,
};

export const mapPrioritiesOrder: Record<Priority, number> = {
  [Priority.HIGH]: 0,
  [Priority.MEDIUM]: 1,
  [Priority.LOW]: 2,
  [Priority.NONE]: 3,
};

declare module '@material-ui/core/styles/createTheme' {
  interface Theme {
    colors: {
      color: React.CSSProperties['color'];
      backgroundColor: React.CSSProperties['backgroundColor'];
      bodyColor: React.CSSProperties['backgroundColor'];
      borderColor: React.CSSProperties['borderColor'];
      itemHover: React.CSSProperties['boxShadow'];
      dropdownColor: React.CSSProperties['backgroundColor'];
      dropdownColorHover: React.CSSProperties['backgroundColor'];
      dropdownColorSelected: React.CSSProperties['backgroundColor'];
      lineColor: React.CSSProperties['borderColor'];
      shadow: React.CSSProperties['boxShadow'];
      modalShadow: React.CSSProperties['boxShadow'];
    };
  }
  interface ThemeOptions {
    colors?: {
      color?: React.CSSProperties['color'];
      backgroundColor?: React.CSSProperties['backgroundColor'];
      bodyColor?: React.CSSProperties['backgroundColor'];
      borderColor?: React.CSSProperties['borderColor'];
      itemHover?: React.CSSProperties['boxShadow'];
      dropdownColor?: React.CSSProperties['backgroundColor'];
      dropdownColorHover?: React.CSSProperties['backgroundColor'];
      dropdownColorSelected?: React.CSSProperties['backgroundColor'];
      lineColor?: React.CSSProperties['borderColor'];
      shadow?: React.CSSProperties['boxShadow'];
      modalShadow?: React.CSSProperties['boxShadow'];
    };
  }
}

const lightTheme = createTheme({
  colors: {
    color: '#000000',
    backgroundColor: '#ffffff',
    bodyColor: '#f5f5f5',
    borderColor: '#e6e6e6',
    itemHover: '0 0 10px 0 #0000004d',
    dropdownColor: '#f1f1f1',
    dropdownColorHover: '#e4e4e4',
    dropdownColorSelected: '#dddddd',
    lineColor: '#cccccc',
    shadow: '0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%)',
    modalShadow: '0 0 15px 1px #00000059',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 960,
      xl: 1200,
    },
  },
});

const darkTheme = createTheme({
  colors: {
    color: '#ffffff',
    backgroundColor: '#000000',
    bodyColor: '#0a0a0a',
    borderColor: '#141414',
    itemHover: '0 0 10px 0 #da00ff4d',
    dropdownColor: '#0e0e0e',
    dropdownColorHover: '#1b1b1b',
    dropdownColorSelected: '#222222',
    lineColor: '#292929',
    shadow:
      '0 2px 4px 0 rgb(218 0 255 / 16%), 0 25px 50px 0 rgb(218 0 255 / 6%);',
    modalShadow: '0 0 15px 1px #da00ff59',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 960,
      xl: 1200,
    },
  },
});

export const mapTheme: Record<ThemeType, Theme> = {
  [ThemeType.LIGHT]: lightTheme,
  [ThemeType.DARK]: darkTheme,
};
