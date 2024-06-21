import { useEffect, useState } from "react";
import { getComments } from "../utils/api";
import { postComment } from "../utils/api";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [newComment,setNewComment] = useState(" ")
  const [isPosting, setIsPosting] = useState(false)
  const [isLoading,setIsLoading] = useState(true)
//   const [tempComments, setTempComments] = useState(comments);


  useEffect(() => {
    setIsLoading(true)
    getComments(article_id)
      .then((commentsList) => {
        setComments(commentsList);
        setIsLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching the comment:", error);
      });
  }, [article_id]);



 const handleChange = (event) => {
    setNewComment(event.target.value);
    
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    setIsPosting(true)
postComment(article_id, newComment)
      .then((comment) => {
        comment.author = "jessjelly"
        console.log(comment);
        setComments((currentList)=>[...currentList, comment]);
        setNewComment("");
        setIsPosting(false)
        
      })
  
    
  };
 
if(isPosting){
    return <p>posting your comment</p>
}

if(isLoading){
    return <h1>Loading</h1>
}
  return (
    <div className="box">
      <div>
        <h2 className="box comment-box">Comments</h2>
      </div>
      <form onSubmit={handleSubmit}>
      <label htmlFor="add-comment">Add comment : </label>
        <textarea type="text"
          id="add-comment"
          name="add-comment"
          onChange={handleChange}
          value={newComment} 
           rows="5" 
        cols="40" 
        style={{ width: '100%', height: '150px' }} />
         <div>
          <button type="submit" className="button">Submit</button>
        </div>
      </form>
    {comments.map((comment)=>{
        
        return(
           
            <li key={comment.comment_id}>
            <div className="box">
              <p>{comment.body}</p>
              <p><strong>Written by:</strong> {comment.author}</p>
              <p><strong>Votes:</strong> {comment.votes}</p>
            </div>
          </li>
        )
    })}
     
    </div>
  );
};

export default Comments;