import React, { useState } from 'react'
import '../styles/search.scss'

const Search = () => {

    const [queryType, setQueryType] = useState('title')
    const [queryText, setQueryText] = useState('')

    const handleChange = ({name, value}) => {
        if (name === 'queryType') {
            setQueryType(value)
        } else {
            setQueryText(value)
        }
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
                    <input type='text' name='queryText' value={queryText} onChange={(e) => handleChange(e.target)} placeHolder='Search term here'/>
                    <div class='search-icon'></div>
                </div>
            </form>
            <div className='click-action advanced-search-button'>
                Advanced Search...
            </div>
            <input className='advanced-search-checkbox' type='checkbox' />
            <div className='advanced-search'>
                <input type='text' name='author' placeHolder='Author&#39;s name' />
                <select type='text' name='genre'>
                    <option>Travel</option>
                    <option>Fantasy</option>
                    <option>Science Fiction</option>
                    <option>Mystery</option>
                    <option>Crime</option>
                    <option>Non-Fiction</option>
                </select>
                <input type='text' name='isbn' placeHolder='ISBN' />
                <input type='text' name='isbn' placeHolder='Publisher' />
            </div>
        </div>
    )
}

export default Search