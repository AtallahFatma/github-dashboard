import {createStore, applyMiddleware, compose} from 'redux';
import thunk from "redux-thunk";
import reducer from '../src/reducers/users';

const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

// store.subscribe(() => store.getState());

export default store;