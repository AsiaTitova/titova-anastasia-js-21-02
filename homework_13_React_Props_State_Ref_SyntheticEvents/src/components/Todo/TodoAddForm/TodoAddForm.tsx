import React from 'react';
import './TodoAddForm.scss';
import { TodoItemType } from '../../../types/responses';

interface Props {
  addItem?: (item: TodoItemType) => void;
}

export class TodoAddForm extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.addTask = this.addTask.bind(this);
  }

  addTask(): void {
    const input = document.querySelector('input');
    if (input && this.props.addItem) {
      this.props.addItem(input.value);
      input.value = '';
    }
  }

  render() {
    return (
      <form method="POST" className="todo__add-form add-form">
        <label className="add-form__label" htmlFor="new-task">
          <p className="add-form__subtitle">Добавить задачу:</p>
          <input className="add-form__input" type="text" id="new-task" />
        </label>
        <button className="add-form__add" type="button" onClick={this.addTask}>Добавить</button>
      </form>
    );
  }
}
