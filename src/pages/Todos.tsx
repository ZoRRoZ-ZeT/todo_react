import TodoApp from '@components/TodoApp/index';
import React from 'react';

const Todos = () => {
  return <TodoApp />;
};

export default React.memo(Todos);
