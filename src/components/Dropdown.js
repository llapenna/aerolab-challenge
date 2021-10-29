// core
import { Link } from 'react-router-dom'

// styles
import '../styles/dropdown.css'

const DropdownOption = ({ text, link, router = false }) => {
  return (
    router
      ? <Link to={link} className='dropdown-option'>{text}</Link>
      : <a className='dropdown-option' href={link} target="_blank" rel="noopener noreferrer">{text}</a>
  )
}

const Dropdown = ({ options, className }) => {
  return (
    <div className={`dropdown-container ${className}`}>
      { options.map(o => <DropdownOption key={o.id} text={o.text} link={o?.link} router={o?.router} />)}
    </div>
  )
}

export default Dropdown