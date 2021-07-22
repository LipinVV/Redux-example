import {combineReducers} from "redux";

import {counterReducer} from "./counter";
import {loginReducer} from "./isLogged";

export const allReducers = combineReducers({
    counter: counterReducer,
    login: loginReducer
})
