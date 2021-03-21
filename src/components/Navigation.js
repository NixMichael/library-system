import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import '../styles/navigation.scss'
import { signOutAction } from '../state/actions/userActions'

const Navigation = () => {

    const dispatch = useDispatch()

    let { userInfo } = useSelector(state => state.userLogin)

    const signOut = () => {
        dispatch(signOutAction())
    }

    return (
        <div className='navigation'>
            <ul>
                <li>
                    <NavLink to='/' exact activeClassName='active-nav-link'>Browse</NavLink>
                </li>
                { userInfo && !userInfo.error ?
                <>
                <li>
                    <NavLink to='/myaccount' activeClassName='active-nav-link'>My Account</NavLink>
                </li>
                <li>
                    <NavLink to='/signin' activeClassName='active-nav-link' onClick={signOut}>Sign Out</NavLink>
                </li>
                </>
                :
                <>
                <li>
                    <NavLink to='/signin' activeClassName='active-nav-link'>Sign In / Register</NavLink>
                </li>
                </>
                }
            </ul>
        </div>
    )
}

export default Navigation