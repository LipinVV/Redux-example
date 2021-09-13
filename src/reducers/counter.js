import {ACTIONS} from "../actions/actions";
import {initialStore} from "../data";


export const counterReducer = (state = initialStore, action) => {
    const warning = 'The value cannot be below zero'
    switch(action.type) {
        case ACTIONS.INCREMENT: {
            if(state.summary >= 0) {
                state.other = 'The value above zero'
            }
            return {...state, summary: state.summary + 1}
        }
        case ACTIONS.DECREMENT: {
            if(state.summary <= 0) {
                return {...state, other: warning}
            }
            return {...state, summary: state.summary - 1}
        }

        case ACTIONS.INCREMENT_BY_AMOUNT: {
            return {...state, summary: state.summary + action.payload}
        }
        default: {
            return state
        }
    }
}