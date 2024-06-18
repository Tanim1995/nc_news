import { useState, useEffect } from "react";
import axios from "axios";
import Article from "./Article";
import { useNavigate } from "react-router-dom";

console.log("check");

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  console.log("check");

  useEffect(() => {
    axios
      .get("https://nc-news-api-4.onrender.com/api/articles")
      .then((response) => {
    
        setArticles(response.data.articles);
      })
      .catch((error) => {
        console.error("Error fetching the articles:", error);
      });
  }, []);


const handleClick = (article_id)=>{
    navigate(`/articles/${article_id}`);

}






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
              <button className="button" onClick={() => handleClick(article.article_id)}>Read More...</button>
            
            </div>
          </li>
        ))}
      </ul> 
       <Article />
    </div>
  );
};
export default Articles;
