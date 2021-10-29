// core
import { useDispatch, useSelector } from 'react-redux'

// components
import Icon from './Icon'

// reducers
import { addCategory, removeCategory } from '../reducers/filterReducer'

// icons
import phones from '../icons/mobile.svg'
import laptop from '../icons/laptop.svg'
import joystick from '../icons/joystick.svg'

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

  // eslint-disable-next-line no-unused-vars
  const selectedCategories = useSelector(store => store.filter.categories)

  // eslint-disable-next-line no-unused-vars
  const categories = [
    { id: 0, name: 'Phones', icon: phones },
    { id: 1, name: 'Gaming', icon: joystick },
    { id: 2, name: 'Laptops', icon: laptop },
    { id: 3, name: 'Cameras', icon: phones },
    { id: 4, name: 'Audio', icon: phones },
    { id: 5, name: 'Monitors & TV', icon: phones },
    { id: 6, name: 'Drones', icon: phones },
    { id: 7, name: 'Phone Accessories', icon: phones },
    { id: 8, name: 'Smart Home', icon: phones },
    { id: 9, name: 'Tablets & E-readers', icon: phones },
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