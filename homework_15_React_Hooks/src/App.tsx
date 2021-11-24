import React from 'react';
import './App.scss';
import HomeworkTask from './components/HomeworkTask/HomeworkTask';
import UserContainer from './components/Users/UserContainer/UserContainer';
import { ThemeContext, ThemeContextProvider, ThemeContextState } from './context/ThemeContext';

const App = () => (
  <ThemeContextProvider>
    <ThemeContext.Consumer>
      {
        (context: Partial<ThemeContextState>) => (
          <div className={`app ${context.darkTheme && 'dark-theme'}`}>
            <HomeworkTask />
            <UserContainer />
          </div>
        )
      }
    </ThemeContext.Consumer>
  </ThemeContextProvider>
);

export default App;
