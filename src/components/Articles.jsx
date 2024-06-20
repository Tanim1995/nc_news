import { useState, useEffect } from "react";
import axios from "axios";
import Article from "./Article";
import { useNavigate } from "react-router-dom";
import { getArticles } from "../utils/api";



const Articles = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();
    console.log(articles,"<<<<<<<<<<<< articles");
  

  useEffect(() => {
    getArticles()
      .then((article) => {
        setArticles(article.data.articles);
      })
      .catch((error) => {
        console.error("Error fetching the comment:", error);
      });
  }, []);

  const handleClick = (article_id) => {
    navigate(`/articles/${article_id}`);

    console.log(articles,"<<<<<<<<<<<<<articles at thee end");

  };

  return (
    <div>
      <h1 className="all-articles">All available Articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.article_id}>
            <div className="box">
              <img src={article.article_img_url} width="300" />
              <h2 className="article-title">{article.title}</h2>
              <p>Topic: {article.topic}</p>
              <p>Written by: {article.author}</p>
              <p>{article.category}</p>
              <button
                className="button"
                onClick={() => handleClick(article.article_id)}
              >
                Read More...
              </button>
            </div>
          </li>
        ))}
      </ul>
      
      <Article articles={articles}/>
    </div>
  );
};
export default Articles;
