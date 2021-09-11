import {ACTIONS} from "../actions/actions";
import {initialStore} from "../data";

export const counterReducer = (state = initialStore, action) => {
    switch(action.type) {
        case ACTIONS.INCREMENT: {
            if(state.summary >= 0) {
                state.other = 'All is good'
            }
            return {...state, summary: state.summary + 1}
        }
        case ACTIONS.DECREMENT: {
            const warning = 'the value cannot be below zero'
            if(state.summary <= 0) {
                return {...state, other: warning}
            }
            return {...state, summary: state.summary - 1}
        }

        case ACTIONS.INCREMENT_BY_AMOUNT: {
            if(state.summary >= 0) {
                state.other = 'All is good'
            }
            return {...state, summary: state.summary + action.payload}
        }
        default: {
            return state
        }
    }
}