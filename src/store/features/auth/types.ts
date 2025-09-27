export interface IUser {
  id: string;
  fullName: string;
  email: string;
  profileImage: string;
  phoneNumber: number;
  createdAt: string;
  updatedAt: string;
}

export interface IAuthState {
  token: string | null;
  user: IUser | null;
  loading: boolean;
}
