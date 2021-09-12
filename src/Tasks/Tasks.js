import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {taskManagementAddTask, taskManagementRemoveTask, taskManagementUpdateTask} from "../actions/actions";

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

    return (
        <div>
            <input value={value} onChange={handleChanger} type='text'/>
            <button
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
            <div style={{display: 'flex', marginTop: '50px'}}>
                {groupTask.map((task, index) => {
                    return (
                        <div key={Date.now() + index}>
                            <div>{task.id}</div>
                            <div>{task.text}</div>
                            <div>{task.completed.toString()}</div>
                            <button onClick={() => {
                                completeHandler(task.id);
                                dispatch(taskManagementUpdateTask(task));
                            }
                            }>Complete
                            </button>
                            <button onClick={() => {
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