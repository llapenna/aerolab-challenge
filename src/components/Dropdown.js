// styles
import '../styles/dropdown.css'

const DropdownOption = ({ text }) => {
  return (
    <a className='dropdown-option' href='./#'>{text}</a>
  )
}

const Dropdown = ({ options, className }) => {
  return (
    <div className={`dropdown-container ${className}`}>
      { options.map(o => <DropdownOption key={o.id} text={o.text} />)}
    </div>
  )
}

export default Dropdown