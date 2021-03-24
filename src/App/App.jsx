import React, {useState, useEffect} from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { PortfolioThemeContext } from '../_context';
import { HomePage } from '../_routes';

function App() {
  const [ theme, setTheme ] = useState({colorOne: '#555555', colorTwo: '#777777', colorThree: '#888888'});
  const history = createBrowserHistory();

  useEffect(() => {

  }, [theme]);

  const logo = 'JD';

  return (
    <PortfolioThemeContext.Provider value={[ theme, setTheme ]}>
      <Router history={history}>
          <Switch>
              <Route exact path="/" component={() => <HomePage logo={logo} theme={theme} />} />
              <Redirect from="*" to="/" />
          </Switch>
      </Router>
    </PortfolioThemeContext.Provider>
  );
}

export { App };
