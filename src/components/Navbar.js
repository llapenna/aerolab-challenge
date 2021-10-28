// core
import { useState } from 'react'

// icons
import burger from '../icons/burger.svg'
import search from '../icons/search.svg'
import logo from '../icons/logo.svg'

// components
import Icon from './Icon'
import Dropdown from './Dropdown'

// styles
import '../styles/navbar.css'


const Burger = () => {
  return (
    <Icon className='burger' icon={burger}/>
  )
}

const ProfilePicture = () => {
  const [visible, setVisible] = useState(false)

  const buttons = [
    // TODO: improve placeholders
    { id:0, text: 'My Products', router: true, link: '/' },
    { id:1, text: '5000+', router: true, link: '/test' },
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
  return (
    <div className='navbar-search'>
      <Icon icon={search}/>
      <div className='ml-4'>
        <input className='search-input' placeholder='search...' />
      </div>
    </div>
  )
}

const Options = () => {
  return (
    <div className='navbar-options'>
      <ProfilePicture />
      <SearchInput />
    </div>
  )
}

const Brand = () => {
  return (
    <div className='navbar-brand'>
      <Icon icon={logo} />
      <span>Aerolab</span>
    </div>
  )
}

const Navbar = () => {

  return (
    <nav className='navbar-position navbar-style'>
      <Brand />
      <Options />
      <Burger />
    </nav>
  )
}

export default Navbar