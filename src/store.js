import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { updateSearchFieldsReducer, searchReducer, latestReducer } from './state/reducers/searchReducers'
import { userLoginReducer } from './state/reducers/userReducers'

const reducers = combineReducers({
    updateSearchFieldsReducer,
    searchReducer,
    latestAdditions: latestReducer,
    userLogin: userLoginReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store