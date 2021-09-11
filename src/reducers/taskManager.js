import {ACTIONS} from "../actions/actions";
import {tasks} from "../data";

export const taskManager = (state = tasks, action) => {
    switch(action.type) {
        case ACTIONS.TASK_MANAGEMENT: {
            return {...state, task: action.payload}
        }
        default: {
            return state
        }
    }
}