import React from 'react';
import './TodoContainer.scss';
import { TodoList } from '../TodoList/TodoList';
import { TodoAddForm } from '../TodoAddForm/TodoAddForm';
import { TodoItemType } from '../../../types/responses';

interface State {
  todoList?: Array<TodoItemType>;
}

export class TodoContainer extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    const todoListDefault = this.getLocalStorage();
    this.state = { todoList: todoListDefault ? JSON.parse(todoListDefault) : [] };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  setLocalStorage = (item: Array<any>) => {
    localStorage.setItem('todo-list', JSON.stringify(item));
  }

  getLocalStorage = () => localStorage.getItem('todo-list');

  addNewTodoListInLocalStorage = (item: TodoItemType) => {
    const todoListLocal = this.getLocalStorage();
    const parseTodoListLocal = todoListLocal ? JSON.parse(todoListLocal) : [];
    parseTodoListLocal.push(item);
    this.setLocalStorage(parseTodoListLocal);
  }

  addItem = (item: TodoItemType) => {
    this.addNewTodoListInLocalStorage(item);
    if (this.state.todoList) {
      const newTodoList = [...this.state.todoList, item];
      this.setState({ todoList: newTodoList });
    }
  }

  deleteCurrentTodoItemInLocalStorage = (item: TodoItemType): void => {
    const todoListLocal = this.getLocalStorage();
    const parseTodoListLocal = todoListLocal ? JSON.parse(todoListLocal) : [];
    const filterTodoListLocal = parseTodoListLocal.filter((row: TodoItemType) => row !== item);
    this.setLocalStorage(filterTodoListLocal);
  }

  deleteItem = (item: TodoItemType): void => {
    if (this.state.todoList) {
      this.deleteCurrentTodoItemInLocalStorage(item);
      const newTodoList = [...this.state.todoList].filter((row: TodoItemType) => row !== item);
      this.setState({ todoList: newTodoList });
    }
  }

  render() {
    return (
      <section className="todo">
        <h2 className="todo__title">Список дел</h2>
        <TodoAddForm addItem={this.addItem} />
        <TodoList list={this.state.todoList} deleteItem={this.deleteItem} />
      </section>
    );
  }
}
