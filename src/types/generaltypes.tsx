export type user = {
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
  address: {
    city: string;
    geo: {
      lat: string;
      lng: string;
    };
    street: string;
    suite: string;
    zipcode: string;
  };
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
};

export type todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type AppStateType = {
  users: user[];
  todos: todo[];
  setUsers: React.Dispatch<React.SetStateAction<user[]>>;
  setTodos: React.Dispatch<React.SetStateAction<todo[]>>;
  FetchTodos: (user: user) => void;
};
