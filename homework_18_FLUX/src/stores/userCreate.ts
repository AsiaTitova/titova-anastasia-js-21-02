/* eslint-disable */
import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';
import { CreateUserActionType } from '../types/actions';
import { LOAD_USERS, CREATE_USER_ERROR, CREATE_USER_SUCCESS } from '../constants/constants';
import { UserCreateState } from '../types/state';
import { UserType, ResponseError } from '../types/types';

class UserCreateStore extends EventEmitter {
  private state: UserCreateState;

  constructor() {
    super();
    this.state = {} as UserCreateState;
    this.getState = this.getState.bind(this);
    this.userCreateSuccess = this.userCreateSuccess.bind(this);
    this.userCreateError = this.userCreateError.bind(this);
  }

  getState = (): UserCreateState => this.state;

  userCreateSuccess = (user: UserType): void => {
    this.state.currentUser = user;
    this.state.isLoading = false;
    this.emit('success');
  };

  userCreateError = (error: ResponseError): void => {
    this.state.error = error;
    this.state.isLoading = false;
    this.emit('error');
  };

  handleAction(action: CreateUserActionType) {
    switch (action.type) {
      case LOAD_USERS:
        this.state.isLoading = true;
        break;
      case CREATE_USER_SUCCESS:
        this.userCreateSuccess(action.payload);
        break;
      case CREATE_USER_ERROR:
        this.userCreateError(action.error);
        break;
      default:
        () => {};
    }
  }
}

const userCreateStore = new UserCreateStore();

dispatcher.register(userCreateStore.handleAction.bind(userCreateStore));

export default userCreateStore;
