import {useDispatch} from "react-redux";
import {isLogged, isLoggedOut} from '../actions/actions'
import {server} from "../App";
import {useState} from "react";

export const Login = () => {
    const dispatch = useDispatch();
    const [userMail, setUserMail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    // vit.lipin@gmail.com
    const logIn = async () => {
        const {user, session, error} = await server.auth.signIn({
            email: userMail,
            password: userPassword,
        })
        dispatch(isLogged())
    }
    const logOut = async () => {
        const {error} = await server.auth.signOut()
        dispatch(isLoggedOut())
    }

    return (
        <div className='login-page'>
            <h1>Login page</h1>
            {!server.auth.session()?.user ?  <label>Type your e-mail
                <input
                    type='text'
                    value={userMail}
                    onChange={(evt) => setUserMail(evt.target.value)}/>
            </label> : null}
            {!server.auth.session()?.user ?    <label>Type your password
                <input
                    type='text'
                    value={userPassword}
                    onChange={(evt) => setUserPassword(evt.target.value)}/>
            </label> : null}
            {server.auth.session()?.user ? <button onClick={logOut}>LogOut</button> :  <button onClick={logIn}>Login</button>}
        </div>
    )
}