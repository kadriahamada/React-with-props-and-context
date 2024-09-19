import { AppContextState } from "./AppContext";

const DataContextDisplay = () => {
  const { users, todos, FetchTodos } = AppContextState();
  console.log(users);

  return (
    <div>
      <h3>Data fetched is: </h3>
      {users.length > 0 &&
        users.map((user) => {
          return (
            <div
              key={user.id}
              style={{
                width: "400px",
                height: "300px",
                border: "1px solid green",
              }}
            >
              <h2>UserName: {user.username}</h2>
              <div>
                <p>User email: {user.email}</p>
                <button onClick={() => FetchTodos(user)}>User Todos</button>
              </div>
            </div>
          );
        })}
      {todos.length > 0 &&
        todos.map((todo) => (
          <div>
            <h3>Todo title: {todo.title}</h3>
            <p>Completed: {todo.id}</p>
          </div>
        ))}
    </div>
  );
};
export default DataContextDisplay;
