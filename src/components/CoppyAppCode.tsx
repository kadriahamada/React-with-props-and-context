// import { useEffect, useState } from "react";
// import "./App.css";
// import UserPage from "./components/users/UserPage";
// import { albums, posts, todo, user } from "./components/types/general_types";

// function App() {
//   const [users, setUsers] = useState<user[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState("");

//   const FetchUsers = async () => {
//     try {
//       const response = await fetch(
//         `https://jsonplaceholder.typicode.com/users`,
//         {
//           method: "GET",
//         }
//       );
//       const data = (await response.json()) as user[];
//       setUsers(data);
//     } catch (err) {
//       const error = err as Error;
//       throw error;
//     }
//   };
//   const FetchTodos = async (id: number): Promise<todo[]> => {
//     try {
//       const response = await fetch(
//         `https://jsonplaceholder.typicode.com/todos?userId=${id}`,
//         {
//           method: "GET",
//         }
//       );
//       const data = (await response.json()) as todo[];
//       return data;
//     } catch (err) {
//       const error = err as Error;
//       throw error;
//     }
//   };
//   const FetchAlbums = async (id: number): Promise<albums[]> => {
//     try {
//       const response = await fetch(
//         `https://jsonplaceholder.typicode.com/albums?userId=${id}`,
//         {
//           method: "GET",
//         }
//       );
//       const data = (await response.json()) as albums[];
//       return data;
//     } catch (err) {
//       const error = err as Error;
//       throw error;
//     }
//   };
//   const FetchPosts = async (id: number): Promise<posts[]> => {
//     try {
//       const response = await fetch(
//         `https://jsonplaceholder.typicode.com/posts?userId=${id}`,
//         {
//           method: "GET",
//         }
//       );
//       const data = (await response.json()) as posts[];
//       return data;
//     } catch (err) {
//       const error = err as Error;
//       throw error;
//     }
//   };

//   useEffect(() => {
//     FetchUsers();
//   }, []);

//   return (
//     <>
//       <div>
//         {isLoading && <div>Loading...</div>}
//         {isError && <div>{isError}</div>}
//         {users.length > 0 && (
//           <UserPage
//             users={users}
//             FetchTodos={FetchTodos}
//             FetchAlbums={FetchAlbums}
//             FetchPosts={FetchPosts}
//           />
//         )}
//       </div>
//     </>
//   );
// }

// export default App;
