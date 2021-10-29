// core
import { useSelector } from 'react-redux'

// utils
import { randomInt } from '../utils'

// components
import StoreItem from './StoreItem'

// styles
import '../styles/featured.css'

const Available = () => {
  return (
    <div className='available'>
      Available right now
    </div>
  )
}
const Title = () => {
  return (
    <div className='title'>
      Featured Items
    </div>
  )
}
const Items = () => {
  // We select 3 random items from the store and show them here
  const i = [randomInt(0, 32), randomInt(0, 32), randomInt(0, 32)]
  const products = useSelector(store => store.products)

  if (products.length > 0) {
    return (
      <div className='flex flex-col md:flex-row mx-auto'>
        <StoreItem product={products[i[0]]} />
        <StoreItem product={products[i[1]]} />
        <StoreItem product={products[i[2]]} />
      </div>
    )
  }
  else
    return null
}
// TODO: Implementar carousel
const Featured = () => {

  const filter = useSelector(store => store.filter.value)

  if (filter === '') {
    return (
      <div className='featured' >
        <Available />
        <Title />
        <Items />
      </div>
    )
  }
  else
    return null
}

export default Featured