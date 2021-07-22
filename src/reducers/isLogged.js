import {INITIAL_STATE} from '../App'

export const loginReducer = (state = false, action) => {
    switch (action.type) {
        case 'IS_LOGGED': {
            return !state;
        }
        default: {
            return state
        }
    }
}