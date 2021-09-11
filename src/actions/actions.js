export const ACTIONS = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    INCREMENT_BY_AMOUNT: 'INCREMENT_BY_AMOUNT',
    POST_WARNING: 'POST_WARNING'
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

export const incrementByAmount = (number) => {
    return {
        type: ACTIONS.INCREMENT_BY_AMOUNT,
        payload: number
    }
}

export const postWarning = (message) => {
    return {
        type: ACTIONS.POST_WARNING,
        payload: message
    }
}