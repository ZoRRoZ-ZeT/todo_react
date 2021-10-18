import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';

import Todos from '../pages/Todos';

const TodosRouter = () => {
  const { path } = useRouteMatch();
  console.log(path);
  return (
    <Route
      exact
      path={[`${path}/`, `${path}/all`, `${path}/active`, `${path}/completed`]}
    >
      {<Todos />}
    </Route>
  );
};

export default React.memo(TodosRouter);
