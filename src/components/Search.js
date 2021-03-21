import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../styles/search.scss'
import { searchInProgress } from '../state/actions/searchActions'

const Search = () => {

    const dispatch = useDispatch()

    let searching = useSelector(state => state.searchReducer)

    const [queryType, setQueryType] = useState('title')
    const [queryText, setQueryText] = useState('')

    const handleChange = ({name, value}) => {
        if (name === 'queryType') {
            setQueryType(value)
        } else {
            setQueryText(value)
        }
    }

    const beginSearch = () => {
        dispatch(searchInProgress(!searching))
    }

    return (
        <div className='search-container'>
            <form>
                <div>
                    <label>Search by</label>
                    <select name='queryType' value={queryType} onChange={(e) => handleChange(e.target)}>
                        <option name='title'>Title</option>
                        <option name='author'>Author</option>
                        <option name='author'>Description</option>
                        <option name='isbn'>ISBN</option>
                    </select>
                </div>
                <div>
                    <label>for</label>
                    <input type='text' name='queryText' value={queryText} onChange={(e) => handleChange(e.target)} placeholder='Search term here'/>
                    <div className='search-icon' onClick={beginSearch}></div>
                </div>
            </form>
            <div>
                <div className='advanced-search-button'>
                    Advanced Search...
                </div>
                <input className='advanced-search-checkbox' type='checkbox' />
                <div className='advanced-search'>
                    <div>
                        <label>Author: </label>
                        <input type='text' name='author' placeholder='Author&#39;s name' />
                    </div>
                    <div>
                        <label>Genre: </label>
                        <select type='text' name='genre'>
                            <option>Travel</option>
                            <option>Fantasy</option>
                            <option>Science Fiction</option>
                            <option>Mystery</option>
                            <option>Crime</option>
                            <option>Non-Fiction</option>
                        </select>
                    </div>
                    <div>
                        <label>ISBN: </label>
                        <input type='text' name='isbn' placeholder='ISBN' />
                    </div>
                    <div>
                        <label>Publisher: </label>
                        <input type='text' name='publisher' placeholder='Publisher' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search