import React from 'react'
import { useSelector } from 'react-redux'
import '../styles/results.scss'

const Results = () => {

    let searchResultsExist = useSelector(state => state.searchReducer)

    return (
        <div className='content'>
            {searchResultsExist.data.length > 0 ?
            <div className='search-results'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            :
            <div className='search-results'>
                Searching...
            </div> 
            }
        </div>
    )
}

export default Results