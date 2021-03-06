import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  let { id } = useParams();
  const [postObject, setPostObject] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:5000/posts/byId/${id}`).then((response) => {
      setPostObject(response.data);
    });

    axios.get(`http://localhost:5000/comments/${id}`).then((response) => {
      setComments(response.data);
    });
  }, []);

  const addComment = () => {
    axios
      .post(`http://localhost:5000/comments/`, {
        commentBody: newComment,
        PostId: id,
      }, 
      {
        headers: {
          accessToken: sessionStorage.getItem("accessToken")
        }
      })
      .then((response) => {
        console.log(response);
        if(response.data.error) {
          alert(response.data.error);
        } else {
          const commentToAdd = { commentBody: newComment };
          setComments([...comments, commentToAdd]);
          setNewComment("");
        }
      });
  };

  return (
    <div className="postPage">
      <div className="leftSide">
        <div className="post" id="individual">
          <div className="title"> {postObject.title} </div>
          <div className="body">{postObject.postText}</div>
          <div className="footer">{postObject.username}</div>
        </div>
      </div>
      <div className="rightSide">
        <div className="addCommentContainer">
          <input
            type="text"
            placeholder="Add new Comment"
            autoComplete="off"
            value={newComment}
            onChange={(event) => setNewComment(event.target.value)}
          />
          <button type="submit" onClick={addComment}>Add comment</button>
        </div>
        <div className="listOfComments">
          {comments.map((comment, key) => {
            return (
              <div className="comment" key={key}>
                {comment.commentBody}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Post;
