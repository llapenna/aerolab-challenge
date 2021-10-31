// core
import { useDispatch, useSelector } from 'react-redux'

// components
import Icon from './Icon'

// reducers
import { addCategory, removeCategory } from '../reducers/filterReducer'

// assets
import phones from '../assets/mobile.svg'
import laptop from '../assets/laptop.svg'
import joystick from '../assets/joystick.svg'
import camera from '../assets/camera.svg'
import audio from '../assets/audio.svg'
import monitor from '../assets/monitor.svg'
import drone from '../assets/drone.svg'
import smartwatch from '../assets/smartwatch.svg'
import tablet from '../assets/tablet.svg'
import smartHome from '../assets/smart-home.svg'

const Category = ({ category, selected }) => {

  const dispatch = useDispatch()

  const handleToggleVisibility = () => {
    if (selected)
      dispatch(removeCategory(category.name))
    else
      dispatch(addCategory(category.name))
  }

  return (
    <button
      className={`category-option ${selected ? 'category-option-selected' : 'category-option-hover'}`}
      onClick={handleToggleVisibility}
    >
      <Icon icon={category.icon} style={{ width: '40px' }}/>
    </button>
  )
}
const Categories = () => {

  const selectedCategories = useSelector(store => store.filter.categories)

  const categories = [
    { id: 0, name: 'Phones', icon: phones },
    { id: 1, name: 'Gaming', icon: joystick },
    { id: 2, name: 'Laptops', icon: laptop },
    { id: 3, name: 'Cameras', icon: camera },
    { id: 4, name: 'Audio', icon: audio },
    { id: 5, name: 'Monitors & TV', icon: monitor },
    { id: 6, name: 'Drones', icon: drone },
    { id: 7, name: 'Phone Accessories', icon: smartwatch },
    { id: 8, name: 'Smart Home', icon: smartHome },
    { id: 9, name: 'Tablets & E-readers', icon: tablet },
  ]

  const isSelected = categoryName => {
    return selectedCategories.includes(categoryName)
  }

  return (
    <div className='flex flex-col mx-auto mt-10 font-thin text-center'>
      <div className='text-4xl text-white border-b-2 pb-5 '>Categories</div>
      <div className='mt-5 flex-row flex-shrink mx-auto'>

        { categories.map(c => <Category key={c.id} category={c} selected={isSelected(c.name)} />)}

      </div>
    </div>
  )
}

export default Categories