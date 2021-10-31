// core
import { createStore, applyMiddleware, combineReducers } from 'redux'
// enables dev tools on any browser
import { composeWithDevTools } from 'redux-devtools-extension'

// middleware
import thunk from 'redux-thunk'

// reducers
import filterReducer from './reducers/filterReducer'
import userReducer from './reducers/userReducer'
import productsReducer from './reducers/productsReducer'
import notificationReducer from './reducers/notificationReducer'

const reducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  filter: filterReducer,
  notification: notificationReducer
})

const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk)
))

export default store
