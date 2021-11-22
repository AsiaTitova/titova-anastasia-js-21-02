import React from 'react';
import './UserItem.scss';
import { UserType } from '../../../types/types';

interface Props {
  item: UserType;
}

export class UserItem extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="user__item">
        <div className="user__avatar">
          <img className="user__img" src={this.props.item.picture} width="100" height="100" alt="avatar" />
        </div>
        <h3 className="user__name">
          {this.props.item.title}
          {this.props.item.firstName}
          {this.props.item.lastName}
        </h3>
      </div>
    );
  }
}
