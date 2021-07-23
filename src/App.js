// npm i redux react-redux
// wrapping by Provider all APP in index.js import {Provider} from "react-redux";
// store.subscribe(() => console.log(store.getState()));
// store.dispatch(increment());
import {useSelector} from "react-redux";
import './App.css';
import {createStore} from "redux";
import {allReducers} from "./reducers/reducers";
import {Calculations} from "./calculations/Calculations";
import {Login} from "./login-page/Login";
import {createClient} from '@supabase/supabase-js'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {Signature} from "./login-page/Signature";


export const server = createClient('https://xhvnywjafhcirlskluzp.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNTU5MjA4OSwiZXhwIjoxOTQxMTY4MDg5fQ.wmUD2lxoMGSRnK5gRaNpxUDVPOd5fH6C41GZdOm_at0')
export const userLoggedIn = Boolean(server.auth.session()?.user);
console.log('APP userLoggedIn =>', userLoggedIn, server.auth.session()?.user)
export const store = createStore(
    allReducers,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(() => {
    localStorage['redux-store'] = JSON.stringify(store.getState())
})
console.log(localStorage)
function App() {
    const globalState = useSelector(state => state)
    console.log('globalState', globalState)
    return (
        <div className="App">
            <Router>
                <Login/>
                <Signature/>
                <Calculations />
            </Router>
        </div>
    );
}

export default App;
