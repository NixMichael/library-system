import React from 'react'
import '../styles/message.scss'

const Message = ({ children }) => {

    return (
        <div>
            <h5 className='warning-message'>{children}</h5>
        </div>
    )
}

export default Message