import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from './pages/Home';
import Post from './pages/Post';
import CreatePost from './pages/CreatePost';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <Link to="/">Homepage</Link>
          <Link to="/createpost">Create a post</Link>
        </div>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/createpost" exact component={CreatePost} />
          <Route path="/post/:id" exact component={Post} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
