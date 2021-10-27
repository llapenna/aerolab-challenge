// components
import Navbar from './components/Navbar'
import Main from './components/Main'

// styles
import './App.css'

function App() {
  return (
    <div className="app app-back-position">
      <div className='header'>
        <Navbar />
        <Main />
      </div>
    </div>
  )
}

export default App
