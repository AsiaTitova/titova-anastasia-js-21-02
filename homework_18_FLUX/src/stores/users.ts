import { EventEmitter } from 'events'; // Позволяет генерировать события, а также подписаться на выполнение действия по данному событию
import dispatcher from '../dispatcher';
import { GET_USERS, LOAD_USERS } from '../constants/constants';
import { UserListResponse } from "../types/types";
import { UserListState } from '../types/state';
import { LoadUserActionType } from "../types/actions";

class UserListStore extends EventEmitter {
  private state: UserListState;

  constructor() {
    super();
    this.state = {} as UserListState;
    this.getState = this.getState.bind(this);
    this.getUserSuccess = this.getUserSuccess.bind(this);
  }

  getState = () => this.state;

  getUserSuccess = (userList: UserListResponse) => {
    this.state.userList = userList;
    this.state.isLoading = false;
    this.emit('change');
  };

  handleAction(action: LoadUserActionType) {
    switch (action.type) {
      case LOAD_USERS:
        this.state.isLoading = true;
        this.emit('change');
        break;
      case GET_USERS:
        this.getUserSuccess(action.payload);
        break;
      default: () => {};
    }
  }
}

const userListStore = new UserListStore();

dispatcher.register(userListStore.handleAction.bind(userListStore));

export default userListStore;
