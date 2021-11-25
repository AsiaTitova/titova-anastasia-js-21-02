import React from 'react';
import {
  Route, Switch, BrowserRouter as Router,
} from 'react-router-dom';
import './App.scss';
import HomeworkTask from './components/HomeworkTask/HomeworkTask';
import UserContainer from './components/Users/UserContainer/UserContainer';
import UserCard from './components/Users/UserCard/UserCard';
import { ThemeContext, ThemeContextProvider, ThemeContextState } from './context/ThemeContext';

const App = () => (
  <ThemeContextProvider>
    <ThemeContext.Consumer>
      {
        (context: Partial<ThemeContextState>) => (
          <Router>
            <div className={`app ${context.darkTheme && 'dark-theme'}`}>
              <HomeworkTask />
              <Switch>
                <Route path="/user/:id">
                  <UserCard />
                </Route>
                <Route exact path="/">
                  <UserContainer />
                </Route>
              </Switch>
            </div>
          </Router>
        )
      }
    </ThemeContext.Consumer>
  </ThemeContextProvider>
);

export default App;
