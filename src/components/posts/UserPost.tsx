import { useState } from "react";
import { comments, posts } from "../types/general_types";
import UserComements from "./UserComments";

type props = {
  posts: posts[];
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setPosts: React.Dispatch<React.SetStateAction<posts[]>>;
};
const UserPost = ({ posts, setShow, setPosts }: props) => {
  const [comments, setComments] = useState<comments[]>([]);
  const [showComments, setShowComments] = useState<boolean>(false);
  const HidePosts = () => {
    setShow(false);
    setPosts([]);
  };

  const FetchComments = async (id: number) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${id}`,
        {
          method: "GET",
        }
      );
      const data = (await response.json()) as comments[];

      setShowComments(true);
      setComments(data);
    } catch (err) {
      const error = err as Error;
      throw error;
    }
  };

  return (
    <div>
      <button onClick={HidePosts}>Hide posts</button>
      {posts.length > 0 && (
        <div>
          {posts.map((post) => (
            <div key={post.id}>
              <h3>Title: {post.title}</h3>
              <div>
                <p>ID: {post.id}</p>
                <p>User ID: {post.userId}</p>
              </div>
              <div
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  margin: "10px",
                  width: "500px",
                  height: "200px",
                  backgroundColor: "beige",
                  textAlign: "justify",
                  fontSize: "20px",
                  borderRadius: "4px",
                  //   color: "white",s
                  letterSpacing: "1.5px",
                }}
              >
                <p>{post.body}</p>
                <button onClick={() => FetchComments(post.id)}>
                  See Comments
                </button>
              </div>
              {posts && comments.length > 0 && (
                <UserComements
                  comments={comments}
                  setShowComments={setShowComments}
                  setComments={setComments}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserPost;
