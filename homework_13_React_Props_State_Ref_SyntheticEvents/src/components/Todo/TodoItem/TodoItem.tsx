import React, { MouseEvent } from 'react';
import './TodoItem.scss';
import { TodoItemType } from '../../../types/responses';

interface Props {
  item?: string;
  deleteItem?: (item: TodoItemType) => void;
}

export class TodoItem extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.deleteTask = this.deleteTask.bind(this);
  }

  deleteTask(evt: MouseEvent<HTMLElement>): void {
    const task = evt.currentTarget?.parentElement?.querySelector('.task__title');
    if (this.props.deleteItem && task && task.textContent) {
      this.props.deleteItem(task.textContent);
    }
  }

  render() {
    return (
      <li className="todo__item task">
        <div className="task__title">{this.props.item}</div>
        <button className="task__delete" type="button" onClick={this.deleteTask}>Удалить</button>
      </li>
    );
  }
}
