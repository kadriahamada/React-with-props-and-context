import { useEffect } from "react";
import { user } from "../types/general_types";

type fechTypes = {
  users: user[];
};
export const FetchUsers = async () => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
      method: "GET",
    });
    const data = (await response.json()) as user[];
    console.log(data);
  } catch (err) {
    const error = err as Error;
    throw error;
  }
};
useEffect(() => {
  FetchUsers();
}, []);
