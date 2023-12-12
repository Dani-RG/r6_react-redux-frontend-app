export interface IListUsers {
  [x: string]: any;
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
  id?: number;
  createdAt?: string;
}

export interface IEditedUser {
  name: string;
  job: string;
  id?: number;
  updatedAt?: string;
}

export interface IUserCardProps {
  user: any;
}

export interface IModalProps {
  open: boolean;
  onClose: () => void;
}

export interface ISidebarContextProps {
  isOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
}
