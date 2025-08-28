export interface  IUser {
  code: string;
  name: string;
  email: string;
  status: string;
  type: string;
}

export interface IToken {
  access_token: string;
  refresh_token: string;
  expiration_token: string;
  token_type: number;
}

export type LoginResponse = {
  statusCode: number;
  message: string;
  data: {
    user: IUser;
    token: IToken;
  };
};
