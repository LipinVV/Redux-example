import {decrement, increment, incrementByAmount} from "../actions/actions";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";


export const Calculations = () => {


    const counter = useSelector(state => state.counter)
    const loginInfo = useSelector(state => state.login)
    const dispatch = useDispatch();
    const [value, setValue] = useState(5)

    const inputHandler = (evt) => {
        const { value } = evt.target
        setValue(Number(value))
    }

    return (
        <div>
            <h1>Welcome!</h1>
            <p>Counter: {counter}</p>
            <p>Login: {loginInfo.toString()}</p>
            {!loginInfo ? 'User is not logged in' : 'User is logged in'}
            <input value={value} onChange={inputHandler} type='number'/>
            <button onClick={() => dispatch(increment(value))}>Plus</button>
            <button onClick={() => dispatch(decrement(value))}>Minus</button>
            <button onClick={() => dispatch(incrementByAmount(value))}>Add amount</button>
        </div>
    )
}