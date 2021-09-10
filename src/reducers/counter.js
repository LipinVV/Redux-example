import {initialStore} from "../App";
import {ACTIONS} from "../actions/actions";

export const counterReducer = (state = 0, action) => {
    switch(action.type) {
        case ACTIONS.INCREMENT: {
            return state + 1
        }
        case ACTIONS.DECREMENT: {
            if(state <= 0) {
                return state
            }
            return state - 1
        }

        case ACTIONS.INCREMENT_BY_AMOUNT: {
            return state + action.payload
        }

        default: {
            return state
        }
    }
}