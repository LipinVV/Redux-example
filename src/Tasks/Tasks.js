import {useDispatch} from "react-redux";
import {useState} from "react";
import {taskManagementAddTask, taskManagementRemoveTask} from "../actions/actions";

export const Tasks = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState("");
    const [task, setTask] = useState([]);
    const [taskId, setTaskId] = useState(0);

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


    return (
        <div>
            <input value={value} onChange={handleChanger} type='text'/>
            <button
                onClick={() => {
                dispatch(taskManagementAddTask(
                    {value, completed: false, id: taskId}
                ));
                submitTaskHandler()
                setValue('');
            }}>Add task
            </button>
            <br/>
            <br/>
            <div style={{display: 'flex', marginTop: '50px'}}>
                {task.map((task, index) => {
                    return (
                        <div key={Date.now() + index}>
                            <div>{task.id}</div>
                            <div>{task.text}</div>
                            <div>{task.completed.toString()}</div>
                            <button onClick={() => {
                                removeTaskHandler(task.id)
                                dispatch(taskManagementRemoveTask(task))
                            }}>Remove task
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}