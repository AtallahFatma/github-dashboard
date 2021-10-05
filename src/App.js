import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import {getData} from './actions';

function App() {
  const users = useSelector(({users}) => users)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => dispatch(getData())}>Get users</button>
        {users &&
          <ul>
          {console.log(users)}
          {/* 
            {users.map(user => (
              <li>{user}</li>
              ))
            } */}
          </ul>
        }
      </header>
    </div>
  );
}

export default App;
