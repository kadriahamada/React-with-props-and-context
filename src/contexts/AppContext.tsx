import { createContext, useContext, useState } from "react";
import { AppContextType, todo, user } from "../components/types/general_types";

const AppContext = createContext<AppContextType>({
  users: [],
  todos: [],
  setUsers: () => {},
  setTodos: () => {},
  FetchTodos: () => {},
});

const MyContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<user[]>([]);
  const [todos, setTodos] = useState<todo[]>([]);

  const FetchTodos = async (user: user) => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?userId=" + user.id
    );
    const data = (await response.json()) as todo[];
    console.log({ todo: data });
    setTodos(data);
  };
  return (
    <AppContext.Provider
      value={{ users, todos, setUsers, setTodos, FetchTodos }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const AppContextState = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error(
      "The app state must only be used in the context of AppProvider"
    );
  }
  return context;
};
export default MyContextProvider;
