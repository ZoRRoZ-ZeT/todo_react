import { AppContext } from '@context/index';
import { MessageType } from '@type/index.types';
import { useContext } from 'react';
import messages from '../translations/lang.json';

const useTranslate = () => {
  const { state } = useContext(AppContext);
  return (message: MessageType) => messages[message][state.language];
};

export default useTranslate;
