import React from 'react';
import './App.scss';
import { HomeworkTask } from './components/HomeworkTask/HomeworkTask';
import { UserContainer } from './components/Users/UserContainer/UserContainer';
import { ThemeContextProvider } from './context/ThemeContext';

class App extends React.Component {
  render() {
    return (
      <ThemeContextProvider>
        <HomeworkTask />
        <UserContainer />
      </ThemeContextProvider>
    );
  }
}

export default App;
