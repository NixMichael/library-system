import axios from 'axios'
import { SEARCH_REQUEST } from '../CONSTANTS'
import { 
    GET_LATEST_REQUEST,
    GET_LATEST_SUCCESS,
    GET_LATEST_FAIL
 } from '../constants/LatestConstants'

export const searchInProgress = (searching = false) => async(dispatch) => {
    dispatch({
        type: SEARCH_REQUEST,
        payload: searching
    })
}

export const getLatest = () => async(dispatch) => {
    try {
        dispatch({
            type: GET_LATEST_REQUEST
        })

        const { data } = await axios({
            method: 'get',
            headers: { 'Content-Type': 'application/json' },
            url: 'http://openlibrary.org/search.json?q=deathly+hallows'
        })

        dispatch({
            type: GET_LATEST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: GET_LATEST_FAIL
        })
    }
}

export const LatestAdditionsView = () => {
    console.log('clicked')
    return {
        type: 'LATEST_ADDITIONS'
    }
}

export const SearchResultsView = () => {
    console.log('clicked')
    return {
        type: 'SEARCH_RESULTS'
    }
}