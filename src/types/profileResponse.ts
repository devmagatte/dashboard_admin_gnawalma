interface IUser {
  name: string;
  email: string;
  type: string;
}

interface Session {
  device: string;
  at: string;
}

type ProfileadminResponse = {
  statusCode: number;
  message: string;
  data: IUser;
};
