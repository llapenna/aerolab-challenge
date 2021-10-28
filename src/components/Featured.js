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
  return (
    <div className='flex flex-col md:flex-row mx-auto'>
      <StoreItem />
      <StoreItem />
      <StoreItem />
    </div>
  )
}
// TODO: Implementar carousel
const Featured = () => {
  return (
    <div className='featured' >
      <Available />
      <Title />
      <Items />
    </div>
  )
}

export default Featured