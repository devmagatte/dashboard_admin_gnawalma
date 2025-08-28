interface User {
  name: string;
  email: string;
  authorizations: any;
}

interface Session {
  device: string;
  at: string;
}

type ProfileadminResponse = {
  statusCode: number;
  message: string;
  data: User;
};
