import { useState, useEffect } from 'react';
import axios from 'axios';


const Home = () => {
    const [postsList, setPostsList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/posts').then((response) => {
            setPostsList(response.data);
        })
    }, [])

    return (
        <div>
            {postsList.map((value,key) => {
                return (
                    <div className="post">
                        <div className="title">{value.title}</div>
                        <div className="body">{value.postText}</div>
                        <div className="footer">{value.username}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Home