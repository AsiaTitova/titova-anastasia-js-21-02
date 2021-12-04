/* eslint-disable */
import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import { GET_CURRENT_USER, LOAD_USERS } from '../constants/constants';
import { UserState } from '../types/state';
import { UserType } from '../types/types';
import { getUsersActionType } from '../types/actions';

class UserStore extends EventEmitter {
  private state: UserState;

  constructor() {
    super();
    this.state = {} as UserState;
    this.getState = this.getState.bind(this);
    this.getUserSuccess = this.getUserSuccess.bind(this);
  }

  getState = (): UserState => this.state;

  getUserSuccess = (user: UserType): void => {
    this.state.currentUser = user;
    this.state.isLoading = false;
    this.emit('change');
  };

  handleAction(action: getUsersActionType) {
    switch (action.type) {
      case LOAD_USERS:
        this.state.isLoading = true;
        this.emit('change');
        break;
      case GET_CURRENT_USER:
        this.getUserSuccess(action.payload);
        break;
      default:
        () => {};
    }
  }
}

const userStore = new UserStore();

dispatcher.register(userStore.handleAction.bind(userStore));

export default userStore;
