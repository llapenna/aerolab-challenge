// components
import Categories from './Categories'
import Products from './Products'

// styles
import '../styles/store.css'


const Store = () => {
  return (
    <div className='store'>
      <Categories />
      <Products />
    </div>
  )
}

export default Store