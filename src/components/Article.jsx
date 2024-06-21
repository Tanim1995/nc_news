import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { downVoteCount, getArticleById, upVoteCount } from "../utils/api";
import Comments from "./Comments"; // Correct import
import Votes from "./Votes";

const Article = ({articles}) => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});


  useEffect(() => {
    getArticleById(article_id)
      .then((articleData) => {
        setArticle(articleData);
      })
      .catch((error) => {
        console.error("Error fetching the article:", error);
      });
  }, [article_id]);

  

  return (
    <div className="box">
      <h1 className="article-title">{article.title}</h1>
      <img src={article.article_img_url} alt={article.title} width="500" />
      <p>{article.body}</p>
      <p>Written by: {article.author}</p>
      <p>Topic: {article.topic}</p>
      

      <Votes article={article} article_id={article_id}/>
  

      <p>Comment Count: {article.comment_count}</p>

      <Comments article_id={article_id} />
    </div>
  );
};

export default Article;
