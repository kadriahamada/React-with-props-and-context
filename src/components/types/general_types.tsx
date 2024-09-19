export type user = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
export type todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
export type albums = {
  userId: number;
  id: number;
  title: string;
};

export type photos = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};
export type posts = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
export type comments = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
export type AppContextType = {
  users: user[];
  todos: todo[];
  FetchTodos: (user: user) => void;
  setUsers: React.Dispatch<React.SetStateAction<user[]>>;
  setTodos: React.Dispatch<React.SetStateAction<todo[]>>;
};
