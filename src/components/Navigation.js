import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/navigation.scss'

const Navigation = () => {
    return (
        <div className='navigation'>
            <ul>
                <li>
                    <NavLink to='/' exact activeClassName='active-nav-link'>Browse</NavLink>
                </li>
                <li>
                    <NavLink to='/signin' activeClassName='active-nav-link'>Sign In</NavLink>
                </li>
                <li>
                    <NavLink to='/register' activeClassName='active-nav-link'>Register</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navigation