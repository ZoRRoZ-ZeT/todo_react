import { Language } from '@type/context';
import { useEffect, useState } from 'react';
import messages from '../translations/lang.json';

const useTranslate = (lang: Language) => {
  const [language, setLanguage] = useState(lang);
  useEffect(() => {
    setLanguage(lang);
  }, [lang]);
  return (message: keyof typeof messages) => messages[message][language];
};

export default useTranslate;
