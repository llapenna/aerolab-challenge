import { useDispatch, useSelector } from 'react-redux'
import { setOrderASC, setOrderDESC } from '../reducers/filterReducer'
import StoreItem from './StoreItem'

// styles
import '../styles/store.css'

const SortBy = ({ handleSortASC, handleSortDESC }) => {
  return (
    <div className='flex flex-row md:ml-6 mt-10'>
      <div className='hidden md:block text-white text-3xl'>Sort By</div>
      <div className='flex flex-row rounded-full bg-white divide-x items-center mx-auto md:ml-10'>
        <div className='sort-option rounded-l-full'><button onClick={handleSortASC}>Lowest Price</button></div>
        <div className='sort-option rounded-r-full'><button onClick={handleSortDESC}>Highest Price</button></div>
      </div>
    </div>
  )
}

const List = ({ products }) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mx-auto md:m-0'>
      { products.map(p => <StoreItem key={p._id} product={p} />) }
    </div>
  )
}

// TODO: Implementar
const PageSelector = () => {
  return (
    <div>

    </div>
  )
}

const Products = () => {
  const { value, order } = useSelector(store => store.filter)
  const products = useSelector(store => {

    let modifiedArray

    value
      ? modifiedArray = store.products.filter(p => p.name.toLowerCase().includes(value.toLowerCase()))
      : modifiedArray = store.products

    if (order === 'ASC')
      modifiedArray.sort((a, b) => a.cost - b.cost)
    if (order === 'DESC')
      modifiedArray.sort((a, b) => b.cost - a.cost)

    return modifiedArray
  })

  const dispatch = useDispatch()

  const handleSortASC = () => {
    dispatch(setOrderASC())
  }
  const handleSortDESC = () => {
    dispatch(setOrderDESC())
  }

  return (
    <div className='mt-5 flex flex-col'>
      <SortBy handleSortASC={handleSortASC} handleSortDESC={handleSortDESC} />
      <List products={products}/>
      <PageSelector />
    </div>
  )
}

export default Products