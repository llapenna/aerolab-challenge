// components
import Icon from './Icon'

// icons
import mobile from '../icons/mobile.svg'
import laptop from '../icons/laptop.svg'
import joystick from '../icons/joystick.svg'

const Category = ({ icon, selected = false }) => {
  return (
    <button
      className={`category-option ${selected ? 'category-option-selected' : 'category-option-hover'}`}
    >
      <Icon icon={icon} style={{ width: '40px' }}/>
    </button>
  )
}
const Categories = () => {
  return (
    <div className='flex flex-col mx-auto mt-10 font-thin text-center'>
      <div className='text-4xl text-white border-b-2 pb-5 '>Categories</div>
      <div className='mt-5 flex flex-row mx-auto'>
        <Category icon={mobile} selected={true} />
        <Category icon={laptop} />
        <Category icon={joystick} />
      </div>
    </div>
  )
}

export default Categories