import { todo } from "../types/general_types";

type props = {
  show: boolean;
  todos: todo[];
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setTodos: React.Dispatch<React.SetStateAction<todo[]>>;
};
const UserTodos = ({ show, todos, setShow, setTodos }: props) => {
  const HideTodos = () => {
    setShow(false);
    setTodos([]);
  };
  return (
    <>
      {show && (
        <div>
          <button onClick={HideTodos}>Hide todos</button>
          {todos.length > 0 && (
            <div>
              {todos.map((todo) => (
                <div key={todo.id}>
                  <h2>{todo.title}</h2>
                  <div>
                    {todo.completed ? (
                      <p style={{ color: "green" }}>Completed</p>
                    ) : (
                      <p style={{ color: "red" }}>Not completed</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};
export default UserTodos;
