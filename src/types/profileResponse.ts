interface IUser {
  name: string;
  email: string;
  type: string;
}


type ProfileadminResponse = {
  statusCode: number;
  message: string;
  data: IUser;
};
