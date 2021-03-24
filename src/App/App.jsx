import React, {useState, useEffect} from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { PortfolioThemeContext } from '../_context';
import { HomePage } from '../_routes';

function App() {
  const [ theme, setTheme ] = useState({colorOne: '#987284', colorTwo: '#9DBF9E', colorThree: '#D0D6B5', colorFour: '#F9B5AC', colorFive: '#EE7674'});
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
