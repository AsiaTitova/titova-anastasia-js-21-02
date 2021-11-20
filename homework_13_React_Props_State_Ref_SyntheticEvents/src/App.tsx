import React from 'react';
import './App.scss';
import { HomeworkTask } from './components/HomeworkTask/HomeworkTask';
import { TodoContainer } from './components/Todo/TodoContainer/TodoContainer';

class App extends React.Component {
  render() {
    return (
      <>
        <HomeworkTask />
        <TodoContainer />
      </>
    );
  }
}

export default App;
