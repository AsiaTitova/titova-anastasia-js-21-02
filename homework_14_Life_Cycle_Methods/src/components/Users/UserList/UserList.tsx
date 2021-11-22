import React from 'react';
import './UserList.scss';
import { UserItem } from '../UserItem/UserItem';
import { UserType } from '../../../types/types';
import ComponentWithHelper from '../../../wrapper/ComponentWithHelper';

interface Props {
  userList: Array<UserType>;
}

export class UserList extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <ul className="user__list">
        {this.props.userList.length
          ? this.props.userList.map((item: UserType, index: number) => (
            <ComponentWithHelper
              id={item.id ? item.id : ''}
              key={index}
            >
              <UserItem item={item} />
            </ComponentWithHelper>
          ))
          : (<li className="item__empty">Список пуст :(</li>)}
      </ul>
    );
  }
}
