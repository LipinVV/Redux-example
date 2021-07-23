export const ACTIONS = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    IS_LOGGED: 'IS_LOGGED',
    IS_NOT_LOGGED: 'IS_NOT_LOGGED'
}

export const increment = (number) => {
    return {
        type: ACTIONS.INCREMENT,
        payload: number
    }
}

export const decrement = (number) => {
    return {
        type: ACTIONS.DECREMENT,
        payload: number
    }
}

export const isLogged = (status) => {
    return {
        type: ACTIONS.IS_LOGGED,
        payload: status
    }
}

export const isLoggedOut = (status) => {
    return {
        type: ACTIONS.IS_NOT_LOGGED,
        payload: status
    }
}