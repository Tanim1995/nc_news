import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Article = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  const [comments, setComment] = useState([])

  useEffect(() => {
    axios
      .get(`https://nc-news-api-4.onrender.com/api/articles/${article_id}`)
      .then((response) => {
       
        setArticle(response.data.article);
      })
      .catch((error) => {
        console.error("Error fetching the items:", error);
      });
  }, [article_id]);

  useEffect(() => {
    axios
      .get(`https://nc-news-api-4.onrender.com/api/articles/${article_id}/comments`)
      .then((response) => {
        console.log(response, "articles");
        setComment(response.data.comments);
      })
      .catch((error) => {
        console.error("Error fetching the items:", error);
      });
  }, []);
 



  return (
    <div className="box">





      <h1 className="article-title">{article.title}</h1>
      <img src={article.article_img_url} alt={article.title} width="500" />
      <p>{article.body}</p>
      <p>Written by: {article.author}</p>
      <p>Topic: {article.topic}</p>
      <p>Votes: {article.votes}</p>
      <p>Comment Count: {article.comment_count}</p>



<div>
<h2 className="box comment-box" >Comments</h2>
</div>
      <ul>
        {comments.map((comment) => (
          <li key={comment.comment_id}>
            <div className="box">
              <h2 className="article-title">{comment.title}</h2>
              <p>{comment.body}</p>
              <p>Written by: {comment.author}</p>
              <p>{comment.category}</p>
            
            
            </div>
          </li>
        ))}
      </ul> 
    </div>
  );
};
export default Article;
