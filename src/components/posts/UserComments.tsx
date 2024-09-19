import { comments } from "../types/general_types";

type props = {
  comments: comments[];
  setShowComments: React.Dispatch<React.SetStateAction<boolean>>;
  setComments: React.Dispatch<React.SetStateAction<comments[]>>;
};
const UserComements = ({ comments, setShowComments, setComments }: props) => {
  const HideComments = () => {
    setShowComments(false);
    setComments([]);
  };
  return (
    <div>
      <button onClick={HideComments}>Hide Comments</button>
      {comments.length > 0 &&
        comments.map((comment) => (
          <div key={comment.id}>
            <h2>User Name: {comment.name}</h2>

            <div>
              <h4>User ID: {comment.id}</h4>
              <p>Post ID: {comment.postId}</p>
              <p>User Email: {comment.email}</p>
            </div>
            <p
              style={{
                textAlign: "justify",
                fontSize: "20px",
                width: "400px",
                height: "100px",
                margin: "5px",
                padding: "5px",
              }}
            >
              <em style={{ color: "red", fontWeight: "bold" }}> Comment: </em>
              {comment.body}
            </p>
          </div>
        ))}
    </div>
  );
};
export default UserComements;
