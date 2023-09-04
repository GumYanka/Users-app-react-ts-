export interface EditUserFormProps {
  userId: any;
  navigate: (path: string) => void;
}

export interface User {
  id: number;
  name: string;
  email: string;
  gender: "male" | "female" | "other";
  status: "active" | "inactive";
}

export interface UserData {
  data: User[];
  meta: {
    pagination: {
      page: number;
      total: number;
    };
  };
}
