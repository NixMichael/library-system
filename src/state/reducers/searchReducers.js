import {
    SEARCH_REQUEST
} from '../CONSTANTS'
import {
    GET_LATEST_REQUEST,
    GET_LATEST_SUCCESS,
    GET_LATEST_FAIL
} from '../constants/LatestConstants'

export const updateSearchFieldsReducer = (state = {}, action) => {
    return state
}

export const searchReducer = (state = { loading: false, data: [], error: '' }, action) => {
    switch (action.type) {
        case SEARCH_REQUEST:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}

export const latestReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_LATEST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_LATEST_SUCCESS:
            return {
                ...state,
                loading: false,
                results: action.payload
            }
        case GET_LATEST_FAIL:
            return {
                ...state,
                loading: false,
                error: 'failed'
            }
        default:
            return state
    }
}