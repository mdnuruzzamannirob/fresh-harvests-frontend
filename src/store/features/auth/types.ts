export interface IUser {
  id: string;
  name: string;
}

export interface IAuthState {
  token: string | null;
  user: IUser | null;
  loading: boolean;
}
