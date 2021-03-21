import React from 'react'
import { useSelector } from 'react-redux'
import '../styles/myAccount.scss'

const MyAccount = () => {

    const { userInfo } = useSelector(state => state.userLogin)

    return (
        <div className='main-content'>
            {
            userInfo && <div>
                <h4>Your account</h4>
                <div className='loaned-books-container'>
                    <h6>Previous Loans</h6>
                    <div className='loaned-books'>
                    {userInfo.books.map(book => {
                        return <div>
                            {book.title}
                            <div>
                                <img src={book.image} alt=''/>
                                {!book.image && <span>No image</span>}
                            </div>
                            </div>
                    })}
                    </div>
                </div>
                <div className='loaned-books-container'>
                    <h6>Suggested Loans</h6>
                    <div className='loaned-books'>
                    {userInfo.books.map(book => {
                        return <div>
                            {book.title}
                            <div>
                                <img src={book.image} alt=''/>
                                {!book.image && <span>No image</span>}
                            </div>
                            </div>
                    })}
                    </div>
                    </div>
                </div>
            
            }
        </div>
    )
}

export default MyAccount