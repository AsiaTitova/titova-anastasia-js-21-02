import React from 'react';
import './TodoList.scss';
import { TodoItemType } from '../../../types/responses';
import { TodoItem } from '../TodoItem/TodoItem';

interface Props {
  list?: Array<TodoItemType>;
  deleteItem?: (item: TodoItemType) => void;
}

export class TodoList extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <ul className="todo__list">
        {this.props.list?.length
          ? this.props.list.map((item: TodoItemType, index: number) => (
            <TodoItem key={index} item={item} deleteItem={this.props.deleteItem} />
          )) : <li className="todo__item todo__item_empty">Список пуст :(</li>}
      </ul>
    );
  }
}
