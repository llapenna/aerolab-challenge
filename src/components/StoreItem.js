// core
import { useDispatch, useSelector } from 'react-redux'

//icons
import coin from '../icons/coin.svg'

// components
import Icon from './Icon'

// styles
import '../styles/storeItem.css'

// services
import historyService from '../services/history'

// action redux
import { decrementPoints } from '../reducers/userReducer'


const ItemImage = ({ image }) => {
  return (
    <img
      src={image}
      className='mx-auto'
      alt='store-item'
      style={{ width: '200px' }}
    />
  )
}

const Category = ({ text }) => <div className='font-thin text-sm pb-2'>{text}</div>
const Name = ({ text }) => <div className='text-lg'>{text}</div>
const Description = ({ product }) => {
  return (
    <div className='border-t-2 pt-3 text-left'>
      <Category text={product.category} />
      <div className='flex flex-row '>
        <Name text={product.name} />
        <div className='flex ml-auto'>
          {product.cost}
          <Icon style={{ width: '30px' }} icon={coin}/>
        </div>
      </div>
    </div>
  )
}

const RedeemButton = ({ available, handleRedeem }) => {
  return (
    <button
      className={`redeem-button redeem-${available <= 0 ? 'available' : 'not-available'}`}
      disabled={available > 0 }
      onClick={handleRedeem}
    >
      {available <= 0 ? 'Redeem now!' : `You need ${available} more!`}
    </button>
  )
}

const StoreItem = ({ product }) => {
  const userPoints = useSelector(store => store.user.points)
  const dispatch = useDispatch()

  const handleRedeem = async () => {
    await historyService.redeem(product._id)
    dispatch(decrementPoints(product.cost))
  }

  return (
    <div className='store-item'>
      <ItemImage image={product.img.url} />
      <Description product={product} />
      <RedeemButton available={product.cost - userPoints} handleRedeem={handleRedeem} />
    </div>
  )
}

export default StoreItem