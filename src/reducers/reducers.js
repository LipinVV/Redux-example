import {combineReducers} from "redux";

import {counterReducer} from "./counter";
import {loginReducer} from "./logIn";
import {logOutReducer} from "./logOut";

export const allReducers = combineReducers({
    counter: counterReducer,
    login: loginReducer,
    logOut: logOutReducer
})
