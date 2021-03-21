import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Search from '../components/Search'
import Results from '../components/Results'
import Suggestions from '../components/Suggestions'
import '../styles/browse.scss'
import { getLatest } from '../state/actions/searchActions';

const Browse = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getLatest())
    }, [dispatch])

    let searchResultsExist = useSelector(state => state.searchReducer)

    return (
        <div className='main-content'>
            <h3>Browse</h3>
            <Search />
            <div className='browse-section-links'>
                <a href='https://michaelnix.dev'>Latest Additions</a>
                <a href='https://michaelnix.dev'>Results</a>
            </div>
            {searchResultsExist.data.length > 0 ?
                <Results/>
                :
                <Suggestions />
            }
        </div>
    )
}

export default Browse