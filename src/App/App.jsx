import React, {useState, useEffect} from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { PortfolioThemeContext } from '../_context';
import { HomePage } from '../_routes';
import './_styles/App.scss';

function App() {
  const [ theme, setTheme ] = useState({});
  const history = createBrowserHistory();

  useEffect(() => {

  }, [theme]);

  return (
    <PortfolioThemeContext.Provider value={[ theme, setTheme ]}>
      <Router history={history}>
          <Switch>
              <Route exact path="/" component={HomePage} />
              <Redirect from="*" to="/" />
          </Switch>
      </Router>
    </PortfolioThemeContext.Provider>
  );
}

export { App };
