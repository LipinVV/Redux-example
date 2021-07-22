export const ACTIONS = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT'
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