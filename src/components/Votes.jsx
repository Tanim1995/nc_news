import { useState, useEffect } from "react";

import { upVoteCount } from "../utils/api";
import { downVoteCount } from "../utils/api";

const Votes = ({ article_id, setArticle, article, articles }) => {
  const [voted, setVoted] = useState(false);
  const [tempVotes, setTempVotes] = useState(null);
  const [num, setNum] = useState(0);
  const [err, setErr] = useState("there is a problem")
  

  console.log(article);

  const handleUpVote = () => {
    setTempVotes((currentVotes) => {
        setVoted(true)
      return currentVotes + 1;
    });
    upVoteCount(article_id);
  };
  const handleDownVote = () => {
    setTempVotes((currentVotes) => {
        setVoted(true)
      return currentVotes - 1;
    });
    downVoteCount(article_id);
  };

  useEffect(() => {
    setTempVotes(article.votes);
  }, [article.votes]);
  return (
    <div>
      <button onClick={handleUpVote} disabled={voted}>
        like ✅
      </button>
      <button onClick={handleDownVote} disabled={voted}>
        dislike ❌
      </button>
      <p>Votes: {tempVotes}</p>
    </div>
  );
};
export default Votes;
