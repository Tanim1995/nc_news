import { useEffect, useState } from "react";
import { getComments } from "../utils/api";

const Comments = ({ article_id }) => {
  const [comments, setComment] = useState([]);

  useEffect(() => {
    getComments(article_id)
      .then((commentsList) => {
        setComment(commentsList);
      })
      .catch((error) => {
        console.error("Error fetching the comment:", error);
      });
  }, [article_id]);

  return (
    <div className="box">
      <div>
        <h2 className="box comment-box">Comments</h2>
      </div>
      <ul>
        {comments.map((comment) => (
          <li key={comment.comment_id}>
            <div className="box">
              <p>{comment.body}</p>
              <p>Written by: {comment.author}</p>
              <p>Votes: {comment.votes}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;