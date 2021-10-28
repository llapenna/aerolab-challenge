// core
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

// components
import Navbar from './components/Navbar'
import Featured from './components/Featured'
import Store from './components/Store'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'

// styles
import './App.css'


function App() {

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
      <Footer />
    </div>
  )
}

export default App
