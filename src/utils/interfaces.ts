export interface IListUsers {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IUser[];
  support: {
    url: string;
    text: string;
  };
}

export interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface INewUser {
  name: string;
  job: string;
  id?: string;
  createdAt?: string;
}

export interface IEditedUser {
  name: string;
  job: string;
  id?: string;
  updatedAt?: string;
}

export interface IEditUserProps {
  userId: string;
}

export interface IUsersAction {
  type: string;
  userData: IUser;
}
