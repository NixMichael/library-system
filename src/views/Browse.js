import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Search from '../components/Search'
import Results from '../components/Results'
import Suggestions from '../components/Suggestions'
import '../styles/browse.scss'
import { LatestAdditionsView, SearchResultsView, getLatest } from '../state/actions/searchActions';

const Browse = () => {

    const dispatch = useDispatch()

    const latestView = useSelector(state => state.browseView)
    console.log('test', latestView)

    useEffect(() => {
        // dispatch(LatestAdditionsView())
        dispatch(getLatest())
    }, [dispatch])

    return (
        <div className='main-content'>
            <h3>Browse</h3>
            <Search />
            <div className='browse-section-links'>
                <div onClick={() => dispatch(LatestAdditionsView())}>Latest Additions</div>
                <div onClick={() => dispatch(SearchResultsView())}>Results</div>
            </div>
            { latestView ?
                <Suggestions />
                :
                <Results/>
            }
        </div>
    )
}

export default Browse