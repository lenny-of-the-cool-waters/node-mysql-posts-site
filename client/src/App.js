import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [listOfPosts, setListOfPosts] = useState([]);

  // Get request at start of page
  useEffect(() => {
    axios.get("http://localhost:5000/posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  return (
    <div className="App">
      {listOfPosts.map((value,key) => {
        return (
          <div className="post">
            <div className="title">{value.title}</div>
            <div className="body">{value.postText}</div>
            <div className="footer">{value.username}</div>
          </div>
        )
      })}
    </div>
  );
}

export default App;
