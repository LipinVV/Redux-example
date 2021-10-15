export const ACTIONS = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    INCREMENT_BY_AMOUNT: 'INCREMENT_BY_AMOUNT',
    TASK_MANAGEMENT_ADD_TASK: 'TASK_MANAGEMENT_ADD_TASK',
    TASK_MANAGEMENT_REMOVE_TASK: 'TASK_MANAGEMENT_REMOVE_TASK',
    TASK_MANAGEMENT_COMPLETE_TASK: 'TASK_MANAGEMENT_COMPLETE_TASK',
    TASK_MANAGEMENT_UPDATE_TASK: 'TASK_MANAGEMENT_UPDATE_TASK',
}

export const increment = number => {
    return {
        type: ACTIONS.INCREMENT,
        payload: number
    }
}

export const decrement = number => {
    return {
        type: ACTIONS.DECREMENT,
        payload: number
    }
}

export const incrementByAmount = number => {
    return {
        type: ACTIONS.INCREMENT_BY_AMOUNT,
        payload: number
    }
}

export const taskManagementAddTask = task => {
    return {
        type: ACTIONS.TASK_MANAGEMENT_ADD_TASK,
        payload: task
    }
}

export const taskManagementRemoveTask = task => {
    return {
        type: ACTIONS.TASK_MANAGEMENT_REMOVE_TASK,
        payload: task
    }
}

export const taskManagementCompleteTask = task => {
    return {
        type: ACTIONS.TASK_MANAGEMENT_COMPLETE_TASK,
        payload: task
    }
}

export const taskManagementUpdateTask = (id, text) => {
    return {
        type: ACTIONS.TASK_MANAGEMENT_UPDATE_TASK,
        payload: id, text
    }
}