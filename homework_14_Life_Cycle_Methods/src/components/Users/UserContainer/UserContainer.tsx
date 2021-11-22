import React from 'react';
import './UserContainer.scss';
import { UserList } from '../UserList/UserList';
import { Pagination } from '../Pagination/Pagination';
import { ThemeSwitch } from '../ThemeSwitch/ThemeSwitch';
import { UserListResponse, UserType } from '../../../types/types';
import { getUserList } from '../../../api/dumMyApi';
import { ThemeContextConsumer, ThemeContextState } from '../../../context/ThemeContext';

interface State {
  userList: Array<UserType>;
  pageArray: Array<number>;
  page: number;
  limit: number;
}

const initialState = {
  userList: [],
  pageArray: [],
  page: 0,
  limit: 10,
};

export class UserContainer extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = initialState;
    this.loadUsers = this.loadUsers.bind(this);
    this.updatePageNumber = this.updatePageNumber.bind(this);
    this.updateLimitUser = this.updateLimitUser.bind(this);
  }

  componentDidMount(): void {
    this.loadUsers(1, 10);
  }

  loadUsers = (page: number, limit: number) => {
    getUserList(page, limit, (resp: UserListResponse) => {
      this.setState({
        userList: resp.data,
        page: resp.page,
        limit: resp.limit,
        pageArray: this.setPageArray(resp.total, resp.limit),
      });
    });
  }

  setPageArray = (page: number, limit: number) => {
    const pageArray = [];
    for (let i = 0; i < page / limit; i += 1) {
      pageArray.push(i + 1);
    }
    return pageArray;
  }

  updatePageNumber(pageNumber: number): void {
    this.setState({ page: pageNumber });
    this.updateUserList(pageNumber, this.state.limit);
  }

  updateLimitUser(limitNumber: number): void {
    this.setState({ limit: limitNumber });
    this.updateUserList(1, limitNumber);
  }

  updateUserList(page: number, limit: number) {
    getUserList(page, limit, (resp: UserListResponse) => this.setState({
      userList: resp.data,
      page: resp.page,
      limit: resp.limit,
      pageArray: this.setPageArray(resp.total, resp.limit),
    }));
  }

  render() {
    return (
      <ThemeContextConsumer>
        {
          (context: Partial<ThemeContextState>) => (
            <section className={context.darkTheme ? 'user user_dark' : 'user'}>
              <div className="user__header">
                <h2 className="user__title">Пользователи</h2>
              </div>
              <UserList userList={this.state.userList} />
              <div className="user__footer">
                <Pagination
                  pageCount={this.state.pageArray}
                  page={this.state.page}
                  limit={this.state.limit}
                  updatePageNumber={this.updatePageNumber}
                  updateLimitUser={this.updateLimitUser}
                />
                <ThemeSwitch />
              </div>
            </section>
          )
        }
      </ThemeContextConsumer>
    );
  }
}
