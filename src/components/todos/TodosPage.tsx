import { albums, posts, user } from "../types/general_types";
import { useState } from "react";
import { todo } from "../types/general_types";
import UserTodos from "./UserTodos";
import UserAlbums from "../albums/UserAlbums";
import UserPost from "../posts/UserPost";
type props = {
  user: user;
  FetchTodos: (id: number) => Promise<todo[]>;
  FetchAlbums: (id: number) => Promise<albums[]>;
  FetchPosts: (id: number) => Promise<posts[]>;
};
const TodosPage = ({ user, FetchTodos, FetchAlbums, FetchPosts }: props) => {
  const [todos, setTodos] = useState<todo[]>([]);
  const [show, setShow] = useState(false);
  const [albums, setAlbums] = useState<albums[]>([]);
  const [posts, setPosts] = useState<posts[]>([]);

  const HandleAlbums = async () => {
    const albums = await FetchAlbums(user.id);
    setAlbums(albums);
    setShow(true);
  };

  const HandleTodos = async () => {
    const todos = await FetchTodos(user.id);
    setTodos(todos);
    setShow(true);
  };
  const Handleposts = async () => {
    const posts = await FetchPosts(user.id);
    setShow(true);
    setPosts(posts);
  };
  return (
    <div>
      {!show && (
        <div
          style={{
            width: "300px",
            height: "250px",
            border: "1px solid black",
            padding: "10px",
            margin: "10px",
          }}
          key={user.id}
        >
          <h2>{user.name}</h2>
          <p>{user.phone}</p>
          <p>{user.email}</p>
          <p>{user.address.city}</p>
          <p>{user.address.zipcode}</p>
          <button onClick={HandleTodos}>Get todos</button>
          <button onClick={HandleAlbums}>Get Albums</button>
          <button onClick={Handleposts}>Get Posts</button>
        </div>
      )}
      {show && todos.length > 0 && (
        <UserTodos
          show={show}
          todos={todos}
          setShow={setShow}
          setTodos={setTodos}
        />
      )}
      {show && albums.length > 0 && (
        <UserAlbums albums={albums} setShow={setShow} setAlbums={setAlbums} />
      )}
      {show && posts.length > 0 && (
        <UserPost posts={posts} setShow={setShow} setPosts={setPosts} />
      )}
    </div>
  );
};
export default TodosPage;
