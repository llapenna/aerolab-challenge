// core
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

// icons
import burger from '../icons/burger.svg'
import search from '../icons/search.svg'
import logo from '../icons/logo.svg'
import coin from '../icons/coin.svg'

// components
import Icon from './Icon'
import Dropdown from './Dropdown'

// styles
import '../styles/navbar.css'

// actions redux
import { addPoints } from '../reducers/userReducer'
import { setFilterValue } from '../reducers/filterReducer'

const Burger = ({ handleClick }) => {
  return (
    <button onClick={handleClick}>
      <Icon className='burger' icon={burger}/>
    </button>
  )
}
const ResponsiveNavbar = () => {
  const filter = useSelector(store => store.filter.value)
  const dispatch = useDispatch()

  return (
    <div className='navbar-responsive-options'>
      <div className='py-5 flex flex-row'>
        <Icon icon={search} className='w-5 -mr-7 z-10'/>
        <input
          placeholder='search...'
          className='rounded-md w-full bg-gray-300 pl-10'
          value={filter}
          onChange={e => dispatch(setFilterValue(e.target.value))}
        />
      </div>
      <div className='py-5'>
        <Link to='/user' >My Products</Link>
      </div>
      <div className='py-5'>
        <a
          href='https://github.com/lucianoglapenna/aerolab-challenge'
          target="_blank"
          rel="noopener noreferrer">
          About
        </a>
      </div>
    </div>
  )
}

const ProfilePicture = () => {
  const [visible, setVisible] = useState(false)

  const buttons = [
    { id:0, text: 'My Products', router: true, link: '/user' },
    { id:2, text: 'About', link: 'https://github.com/lucianoglapenna/aerolab-challenge' }
  ]

  return (
    <div>
      <img
        className='profile-picture'
        onClick={() => setVisible(!visible)}
        // placeholder picture
        src='https://gravatar.com/avatar/02da3654c817d754ada86ad4f16d1761?d=identicon'
        alt='profile'
      />
      { visible && <Dropdown options={buttons} className='mt-5'/> }
    </div>

  )
}
const SearchInput = () => {
  const dispatch = useDispatch()

  return (
    <div className='navbar-search'>
      <Icon icon={search}/>
      <div className='ml-4'>
        <input
          className='search-input'
          onChange={e => dispatch(setFilterValue(e.target.value))}
          placeholder='search...'
        />
      </div>
    </div>
  )
}
const Points = () => {
  const [visible, setVisible] = useState(false)

  const dispatch = useDispatch()
  const points = useSelector(store => store.user.points)

  const handleAddPoints = points => () => dispatch(addPoints(points))

  return (
    <div className='ml-auto relative'>
      <button className='points' onClick={ () => setVisible(!visible)}>
        <div className='my-auto md:mx-2'>{points}</div>
        <Icon icon={coin} style={{ height: '32px' }} />
        <div className='my-auto md:mx-2'>+</div>
      </button>
      <div className='add-points-container' style={{ display: visible ? '' : 'none' }}>
        <button className='add-points-button' onClick={handleAddPoints(1000)}>+1000</button>
        <button className='add-points-button' onClick={handleAddPoints(5000)}>+5000</button>
        <button className='add-points-button' onClick={handleAddPoints(7500)}>+7500</button>
      </div>
    </div>
  )
}

const Options = () => {
  return (
    <div className='navbar-options'>
      <SearchInput />
      <ProfilePicture />
    </div>
  )
}

const Brand = () => {
  return (
    <Link to='/'>
      <div className='navbar-brand'>
        <Icon icon={logo} />
        <span>Aerolab</span>
      </div>
    </Link>
  )
}

const Navbar = () => {

  const [sidebarVisible, setSidebarVisible] = useState(false)

  const handleBurger = () => {
    setSidebarVisible(!sidebarVisible)
  }

  return (
    <nav className='navbar-position navbar-style'>
      <Brand />
      <Points />
      <Options />
      <Burger handleClick={handleBurger} />
      { sidebarVisible && <ResponsiveNavbar /> }
    </nav>
  )
}

export default Navbar