import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { signInAction } from '../state/actions/userActions'
import Message from '../components/Message'
import '../styles/signIn.scss'

const SignIn = () => {

    const dispatch = useDispatch()

    const { userInfo } = useSelector(state => state.userLogin)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    useEffect(() => {
        if (userInfo && !userInfo.error) {
            history.push('/myaccount')
        }
    }, [history, userInfo])

    const submitSignIn = (e) => {
        e.preventDefault()
        dispatch(signInAction(username, password))
    }

    return (
        <div className='main-content'>
            Sign In
            <form onSubmit={submitSignIn}>
                <div>
                    <label>Username:</label>
                    <input id='username' type='text' value={username} name='username' onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type='submit'>Sign In</button>
            </form>
            { userInfo && userInfo.error && <Message>Your credentials are incorrect</Message> }
        </div>
    )
}

export default SignIn