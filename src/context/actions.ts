import {
  ContextActionType,
  Language,
  LanguageAction,
  Theme,
  ThemeAction,
} from '@type/context';

export const setLanguage = (language: Language): LanguageAction => ({
  type: ContextActionType.SET_LANGUAGE,
  payload: { language },
});

export const setTheme = (theme: Theme): ThemeAction => ({
  type: ContextActionType.SET_THEME,
  payload: { theme },
});
