import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {
    taskManagementAddTask,
    taskManagementCompleteTask,
    taskManagementRemoveTask,
    taskManagementUpdateTask
} from "../actions/actions";
import './tasks.css';

export const Tasks = () => {
    const curState = useSelector(state => state);
    const dispatch = useDispatch();
    const [value, setValue] = useState('');
    const [tasks, setTasks] = useState([]);
    const [taskId, setTaskId] = useState(0);
    const [groupTask, setGroundTask] = useState([]);
    const [editingText, setEditingText] = useState('');
    const [taskToChange, setTaskToChange] = useState(null);

    useEffect(() => {
        const json = localStorage.getItem("task");
        const loadedTasks = JSON.parse(json);
        if (loadedTasks) {
            setTasks(loadedTasks);
        }
    }, []);

    useEffect(() => {
        const json = JSON.stringify(tasks);
        localStorage.setItem("task", json);
    }, [tasks]);

    const handleChanger = (evt) => {
        const {value} = evt.target;
        setValue(value);
    }

    const editTaskHandleChanger = (evt, id) => {
        const {value} = evt.target;
        setEditingText(value);
        dispatch(taskManagementUpdateTask({id: id, text: value}));
    }

    const submitTaskHandler = () => {
        setTaskId(prevState => prevState + 1);
        setTasks([
            ...tasks,
            {text: value, completed: false, id: taskId, changed: false}
        ]);
    }

    const editTextTask = (id) => {
        setTasks(tasks.map(oneTask => {
            if (oneTask.id === id) {
                return {
                    ...oneTask, changed: true
                }
            }
            return oneTask;
        }))
        setTaskToChange(id);
    }

    const saveTextTask = (id) => {
        setTasks(tasks.map(oneTask => {
            if (oneTask.id === id) {
                return {
                    ...oneTask, text: editingText, changed: false
                }
            }
            return oneTask;
        }))
    }

    const discardTextTask = (id) => {
        setTasks(tasks.map(oneTask => {
            if (oneTask.id === id) {
                return {
                    ...oneTask, changed: false
                }
            }
            return oneTask;
        }))
    }

    const removeTaskHandler = (id) => {
        setTasks(tasks.filter(issue => issue.id !== id));
    }

    const completeHandler = (id) => {
        setTasks(tasks.map(oneTask => {
            if (oneTask.id === id) {
                return {
                    ...oneTask, completed: oneTask.completed !== true
                }
            }
            return oneTask;
        }))
    }

    const [filter, setFilter] = useState('all');

    const selectHandler = (evt) => {
        const {value} = evt.target;
        setFilter(value);
    }

    useEffect(() => {
        filterHandler(filter);
    }, [tasks, filter]);

    const filterHandler = (value) => {
        if (value === 'completed') {
            setGroundTask(tasks.filter(el => el.completed === true));
        }
        if (value === 'uncompleted') {
            setGroundTask(tasks.filter(el => el.completed === false));
        }
        if (value === 'all') {
            setGroundTask(tasks);
        }
        return groupTask;
    }
    console.log('redux', curState.taskManager.tasks)

    return (
        <div className='tasks'>
            <input
                value={value}
                onChange={handleChanger}
                type='text'/>
            <button
                type='button'
                className='tasks__button'
                onClick={() => {
                    dispatch(taskManagementAddTask(
                        {
                            text: value,
                            completed: false,
                            id: taskId,
                            changed: false
                        }
                    ));
                    submitTaskHandler();
                    setValue('');
                }}>Add task
            </button>
            <br/>
            <br/>
            <select onChange={selectHandler}>
                <option value='all'>All</option>
                <option value='completed'>Completed</option>
                <option value='uncompleted'>Uncompleted</option>
            </select>
            <div className='tasks__tasks-block'>
                {groupTask.map(task=>
                    <div
                        className={!task.completed ? 'task__single-task' : 'task__single-task task__single-task-completed'}
                        key={task.id}>
                        <div>
                            <div>id: {task.id}</div>
                            {task.changed  ?
                                <input
                                    type='text'
                                    value={editingText}
                                    onChange={(evt) => editTaskHandleChanger(evt, task.id)}/> : <div>{task.text}</div>
                            }
                        </div>
                        <button
                            type='button'
                            className={!task.completed ? 'tasks__button' : 'tasks__button tasks__button-completed'}
                            onClick={() => {
                                completeHandler(task.id);
                                dispatch(taskManagementCompleteTask(task));
                            }
                            }>{task.completed ? 'Completed' : 'Complete'}
                        </button>
                        <button
                            type='button'
                            className='tasks__button tasks__button-remove'
                            onClick={() => {
                                removeTaskHandler(task.id);
                                dispatch(taskManagementRemoveTask(task));
                            }}>Remove task
                        </button>
                        {task.id !== taskToChange ?
                            <button
                                type='button'
                                onClick={() => {
                                    editTextTask(task.id);
                                    setEditingText(task.text);
                                }}
                            >
                                Edit
                            </button>
                            :
                            <button
                                type='button'
                                onClick={() => {
                                    saveTextTask(task.id);
                                    setTaskToChange(null);
                                }}
                            >
                                Save
                            </button>
                        }
                        {task.id === taskToChange &&
                        <button
                            type='button'
                            onClick={() => {
                                discardTextTask(task.id);
                                setTaskToChange(null);
                            }}
                        >
                            Discard
                        </button>
                        }
                    </div>
                )
                }
            </div>
        </div>
    )
}