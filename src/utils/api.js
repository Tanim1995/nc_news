import axios from "axios";


const newsApi = axios.create({
    baseURL: "https://nc-news-api-4.onrender.com/api"
})


export const getComments= (article_id) => {

    return newsApi.get(`/articles/${article_id}/comments`).then((response)=>{
        return response.data.comments
    })
        
}

export const getArticleById = (article_id)=>{

    return newsApi.get(`/articles/${article_id}`).then((response)=>{
        
        return response.data.article
    })
}






export const upVoteCount = (article_id) => {
const upVote = { inc_votes: 1 };
    return newsApi.patch(`/articles/${article_id}`,upVote).then((response)=>{
        return response.data.article
    })
}

export const downVoteCount = (article_id) => {
    const downVote = { inc_votes: -1 };
    return newsApi.patch(`/articles/${article_id}`, downVote).then((response)=>{
        
        return response.data.article
    })
}



export const postComment = (article_id, comment) => {
    const commentData = { userName: "jessjelly", body: comment}

    return newsApi.post(`/articles/${article_id}/comments`, commentData).then((response)=>{

        console.log(response)
        return response.data

    })
}


export const getArticles = () => {
    return newsApi.get(`/articles`)

}


