import { useState, useEffect } from "react";
import axios from "axios";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  //   const [basket, setBasket] = useState([]);
  console.log("check");

  useEffect(() => {
    axios
      .get("https://nc-news-api-4.onrender.com/api/articles")
      .then((response) => {
        console.log(response,"respons<<<<<<<<e");
        setArticles(response.data.articles);
      })
      .catch((error) => {
        console.error("Error fetching the articles:", error);
      });
  }, []);
console.log(articles,"<<<<<<<<<<articles");
  return (
    <div>
      <h1>All available Articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <div className="box">
            <img src={article.article_img_url} width="300" />
            <h2>{article.title}</h2>
            <p>Topic: {article.topic}</p>
            <p>Written by: {article.author}</p>
            <p>{article.category}</p>
            <button className="button" onclick>Read More...</button>
            
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Articles;
