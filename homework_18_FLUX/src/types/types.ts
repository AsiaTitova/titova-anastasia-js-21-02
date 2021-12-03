export interface ListResponseType<T> {
  data: Array<T>;
  total: number;
  page: number;
  limit: number;
}

export interface UserLocationType {
  country?: string,
  state?: string,
  city?: string,
  street?: string,
  timezone?: string,
}

export interface UserType {
  id?: string;
  title?: string;
  firstName?: string;
  lastName?: string;
  picture?: string;
  gender?: string;
  email?: string;
  dateOfBirth?: string;
  registerDate?: string;
  phone?: string;
  location?: UserLocationType | undefined;
}

export interface UserListResponse extends ListResponseType<UserType> {}

export interface ResponseError {
  error: string;
}

export interface MenuItem {
  name: string;
  path: string;
}
