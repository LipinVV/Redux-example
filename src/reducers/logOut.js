export const logOutReducer = (state = false, action) => {
    switch (action.type) {
        case 'IS_NOT_LOGGED': {
            return !state;
        }
        default: {
            return state
        }
    }
}