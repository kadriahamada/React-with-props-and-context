import { useEffect } from "react";
import "./App.css";
import { user } from "./components/types/general_types";
import { AppContextState } from "./contexts/AppContext";
import DataContextDisplay from "./contexts/ContextDisplay";

function App() {
  const context = AppContextState();

  const FetchUsers = async () => {
    const users = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = (await users.json()) as user[];
    console.log({ users: data });
    context.setUsers(data);
  };
  useEffect(() => {
    FetchUsers();
  }, []);
  return (
    <div>
      <DataContextDisplay />
    </div>
  );
}

export default App;
