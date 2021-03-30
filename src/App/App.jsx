import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ContextData, ContextTheme } from '../_context';
import { HomePage } from '../_routes';

function App() {
  const history = createBrowserHistory();

  return (
    <ContextData>
      <ContextTheme>
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={() => <HomePage />} />
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
      </ContextTheme>
    </ContextData>
  );
}

export { App };
