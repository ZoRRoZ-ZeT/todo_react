export enum ContextActionType {
  SET_LANGUAGE = 'SET_LANGUAGE',
  SET_THEME = 'SET_THEME',
}

interface IContextAction<
  TType extends ContextActionType,
  TPayload extends unknown
> {
  type: TType;
  payload?: TPayload;
}

export type LanguageAction = IContextAction<
  ContextActionType.SET_LANGUAGE,
  {
    language: Language;
  }
>;

export type ThemeAction = IContextAction<
  ContextActionType.SET_THEME,
  { theme: Theme }
>;

export type ContextActions = LanguageAction | ThemeAction;

export enum Language {
  EN = 'en',
  RU = 'ru',
  UK = 'uk',
}
export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export type ContextStateType = {
  language: Language;
};
