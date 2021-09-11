import {combineReducers} from "redux";

import {counterReducer} from "./counter";
import {taskManager} from "./taskManager";

export const allReducers = combineReducers({
    counter: counterReducer,
    taskManager: taskManager,
})
