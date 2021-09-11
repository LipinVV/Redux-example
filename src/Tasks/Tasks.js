import {useDispatch, useSelector} from "react-redux";
import {useState, useEffect} from "react";
import {tasks} from "../data";
import {taskManager} from "../reducers/taskManager";
import {taskManagement} from "../actions/actions";

export const Tasks = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState("");
    const [tasks, setTask] = useState([]);

    const handleChanger = (evt) => {
        const { value } = evt.target
        setValue(value);
    }

    const submitHandler = () => {
        setTask([
            ...tasks,
            {text: value, completed: false, id: Math.round(Math.random() * 10)}
        ]);
        dispatch(taskManagement(tasks));
        setValue('');
    }

    useEffect(() => {

    }, [tasks])
    return (
        <div>
            <input value={value} onChange={handleChanger} type='text'/>
            <button onClick={submitHandler}>Add task</button>
            <button>Remove task</button>
            <div>
                {tasks.length > 0 && tasks.map((task, index )=> {
                    return (
                        <div key={Date.now() + index}>
                            <div>{task.id}</div>
                            <div>{task.text}</div>
                            <div>{task.completed.toString()}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}