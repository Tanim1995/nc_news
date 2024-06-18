
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from "axios";


const Article = ()=>{
    const [article, setArticle] = useState({});
    const {article_id } = useParams()


    console.log("topman");


    useEffect(() => {
        axios
          .get(`https://nc-news-api-4.onrender.com/api/articles/${article_id}`)
          .then((response) => {
            console.log(response,"articles");
            setArticle(response.data.article);
          })
          .catch((error) => {
            console.error("Error fetching the items:", error);
          });
      },[article_id]);

    return (
        
       
        <div className="box">
        <h1 className="article-title">{article.title}</h1>
        <img src={article.article_img_url} alt={article.title} width="500" />
        <p>{article.body}</p>
        <p>Written by: {article.author}</p>
        <p>Topic: {article.topic}</p>
        <p>Votes: {article.votes}</p>
      </div>
             
       

       
        
   
    )
}
export default Article