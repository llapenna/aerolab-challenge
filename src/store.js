// core
import { createStore, applyMiddleware, combineReducers } from 'redux'
// enables dev tools on any browser
import { composeWithDevTools } from 'redux-devtools-extension'

// middleware
import thunk from 'redux-thunk'

// reducers
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
  filter: filterReducer,
})

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk)
))

export default store
