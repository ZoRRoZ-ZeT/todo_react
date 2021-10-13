import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Todos from '../pages/Todos';

const TodosRouter = () => {
  const { path } = useRouteMatch();
  console.log(path);
  return (
    <div>
      <Switch>
        <Route exact path={[`${path}/`, `${path}/all`]}>
          {<Todos />}
        </Route>
        <Route exact path={`${path}/active`}>
          {<Todos />}
        </Route>
        <Route exact path={`${path}/completed`}>
          {<Todos />}
        </Route>
      </Switch>
    </div>
  );
};

export default React.memo(TodosRouter);
