import {ACTIONS} from "../actions/actions";
import {taskList} from "../data";

export const taskManager = (state = {tasks : taskList}, action) => {
    switch(action.type) {
        case ACTIONS.TASK_MANAGEMENT_ADD_TASK: {
            return {tasks: [...state.tasks, action.payload]}
        }
        case ACTIONS.TASK_MANAGEMENT_REMOVE_TASK: {
            return {...state, tasks: state.tasks.filter(task => task.id !== action.payload.id)}
        }
        default: {
            return state
        }
    }
}