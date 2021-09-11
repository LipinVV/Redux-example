export const ACTIONS = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    INCREMENT_BY_AMOUNT: 'INCREMENT_BY_AMOUNT',
    TASK_MANAGEMENT: 'TASK_MANAGEMENT'
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

export const taskManagement = (message) => {
    return {
        type: ACTIONS.TASK_MANAGEMENT,
        payload: message
    }
}