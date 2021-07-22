// npm i redux react-redux
// wrapping by Provider all APP in index.js import {Provider} from "react-redux";
// store.subscribe(() => console.log(store.getState()));
// store.dispatch(increment());
import './App.css';
import {createStore} from "redux";
import {allReducers} from "./reducers/reducers";
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement, isLogged} from "./actions/actions";

export const INITIAL_STATE = {
    startValue: 0,
    isLoggedIn: false
}
export const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log('STORE', store)
function App() {
    const counter = useSelector(state => state.counter)
    const loginInfo = useSelector(state => state.login)
    const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Welcome!</h1>
        <h3>{INITIAL_STATE.startValue}</h3>
        <p>Counter: {counter}</p>
        <p>Login: {loginInfo.toString()}</p>
        {!loginInfo ? 'User is not logged in' : 'User is logged in'}
        <button onClick={() => dispatch(increment())}>Plus</button>
        <button onClick={() => dispatch(decrement())}>Minus</button>
        <button onClick={() => dispatch(isLogged())}>Login</button>
    </div>
  );
}

export default App;
