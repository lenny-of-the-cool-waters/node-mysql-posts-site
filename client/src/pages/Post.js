import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  let { id } = useParams();
  const [postObject, setPostObject] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/posts/byId/${id}`).then((response) => {
      setPostObject(response.data);
    });

    // return setPostObject({});
  });

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
          <input type="text" placeholder="Add new Comment" autoComplete="off" />
          <button type="submit"></button>
        </div>
        <div className="listOfComments"></div>
      </div>
    </div>
  );
};

export default Post;
