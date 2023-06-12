export type NewUserData = {
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  password: string;
  roles: {
    id: number;
  }[];
};
