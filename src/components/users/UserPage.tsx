import TodosPage from "../todos/TodosPage";
import { albums, photos, posts, todo, user } from "../types/general_types";

type props = {
  users: user[];
  FetchTodos: (id: number) => Promise<todo[]>;
  FetchAlbums: (id: number) => Promise<albums[]>;
  FetchPosts: (id: number) => Promise<posts[]>;
};
const UserPage = ({ users, FetchTodos, FetchAlbums, FetchPosts }: props) => {
  return (
    <div>
      {users.map((user) => (
        <TodosPage
          key={user.id}
          user={user}
          FetchTodos={FetchTodos}
          FetchAlbums={FetchAlbums}
          FetchPosts={FetchPosts}
        />
      ))}
    </div>
  );
};

export default UserPage;
