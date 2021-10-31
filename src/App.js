// core
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

// components
import Navbar from './components/Navbar'
import Featured from './components/Featured'
import Store from './components/Store'
import UserProfile from './components/UserProfile'

import Notification from './components/Notification'

// styles
import './App.css'

// redux actions
import { setUser } from './reducers/userReducer'
import { setProducts } from './reducers/productsReducer'


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    // we load all the available products and the user information
    dispatch(setUser())
    dispatch(setProducts())
  }, [dispatch])

  return (
    <div className="app app-back-position">
      <Router>
        <Navbar />

        <Switch>

          <Route path='/user'>
            <div className='user'>
              <UserProfile />
            </div>
          </Route>
          <Route path='/' exact>
            <div className='main'>
              <Featured />
              <Store />
            </div>
          </Route>

        </Switch>
      </Router>
      <Notification/>
    </div>
  )
}

export default App