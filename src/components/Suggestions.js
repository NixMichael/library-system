import React from 'react'
import { useSelector } from 'react-redux'

const Suggestions = () => {

    const { loading, results, error } = useSelector(state => state.latestAdditions)

    return (
        <div className='content'>
            <div className='search-results'>
                { !results ? <div>Nothing new</div> :
                <>
                {
                    results.docs.map((book, i) => {
                        return (
                        <div key={i}>
                            <h5>{book.title}</h5>
                            <h6>{book.author_name}</h6>
                            {/* <p>{book.isbn[0]}</p> */}
                            <p>{book.first_publish_year}</p>
                        </div>
                        )
                    })
                }
                </>
                }
            </div>
        </div>
    )
}

export default Suggestions