import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {taskManagementAddTask, taskManagementRemoveTask, taskManagementUpdateTask} from "../actions/actions";
import './tasks.css';

export const Tasks = () => {
    const curState = useSelector(state => state)
    const dispatch = useDispatch();
    const [value, setValue] = useState("");
    const [task, setTask] = useState([]);
    const [taskId, setTaskId] = useState(0);
    const [groupTask, setGroundTask] = useState([])

    const handleChanger = (evt) => {
        const {value} = evt.target;
        setValue(value);
    }

    const submitTaskHandler = () => {
        setTaskId(prevState => prevState + 1)
        setTask([
            ...task,
            {text: value, completed: false, id: taskId}
        ]);
    }
    const removeTaskHandler = (id) => {
        setTask(task.filter(issue => issue.id !== id));
    }

    const completeHandler = (id) => {
        setTask(task.map(oneTask => {
            if (oneTask.id === id) {
                return {
                    ...oneTask, completed: !oneTask.completed
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
    }, [task, filter]);

    const filterHandler = (value) => {
        if(value === 'completed') {
            setGroundTask(task.filter(el => el.completed === true));
        }
        if(value === 'uncompleted') {
            setGroundTask(task.filter(el => el.completed === false));
        }
        if(value === 'all') {
            setGroundTask(task);
        }
        return groupTask;
    }
    console.log(curState)
    return (
        <div className='tasks'>
            <input value={value} onChange={handleChanger} type='text'/>
            <button
                className='tasks__button'
                onClick={() => {
                    dispatch(taskManagementAddTask(
                        {value, completed: false, id: taskId}
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
                {groupTask.map((task, index) => {
                    return (
                        <div
                            className={!task.completed ? 'task__single-task' : 'task__single-task task__single-task-completed'}
                            key={Date.now() + index}>
                            <div>id: {task.id + 1}</div>
                            <div>{task.text}</div>
                            <button
                                className={!task.completed ? 'tasks__button' : 'tasks__button tasks__button-completed'}
                                onClick={() => {
                                completeHandler(task.id);
                                dispatch(taskManagementUpdateTask(task));
                            }
                            }>{task.completed ? 'Completed' : 'Complete'}
                            </button>
                            <button
                                className='tasks__button tasks__button-remove'
                                onClick={() => {
                                removeTaskHandler(task.id);
                                dispatch(taskManagementRemoveTask(task));
                            }}>Remove task
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}