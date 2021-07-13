import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Homepage</Link>
        <Link to="/createpost">Create a post</Link>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/createpost" exact component={CreatePost} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
