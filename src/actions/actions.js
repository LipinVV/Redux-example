export const ACTIONS = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    IS_LOGGED: 'IS_LOGGED'
}

export const increment = () => {
    return {
        type: ACTIONS.INCREMENT
    }
}

export const decrement = () => {
    return {
        type: ACTIONS.DECREMENT
    }
}

export const isLogged = () => {
    return {
        type: ACTIONS.IS_LOGGED
    }
}