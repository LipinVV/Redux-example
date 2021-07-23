import {useState} from "react";
import {server} from "../App";

export const Signature = () => {
    const [userMail, setUserMail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const signUp = async () => {
        const { user, session, error } = await server.auth.signUp({
            email: userMail,
            password: userPassword,
        })
    }

    return (
        <div className='login-page'>
            <h1>Registration page</h1>
            <div>
                <label>Type your e-mail
                    <input
                        type='text'
                        value={userMail}
                        onChange={(evt) => setUserMail(evt.target.value)}/>
                </label>
                <label>Type your password
                    <input
                        type='text'
                        value={userPassword}
                        onChange={(evt) => setUserPassword(evt.target.value)}/>
                </label>
            </div>
        </div>
    )
}