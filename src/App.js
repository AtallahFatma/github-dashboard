import './App.css';
import SearchUser from './components/searchUser';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import RepoDetails from './components/repoDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          Github dashboard Sample
        </header>
      </div>
      <Switch>
        <Route path="/details">
          <RepoDetails />
        </Route>
        <Route path="/">
          <SearchUser />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
