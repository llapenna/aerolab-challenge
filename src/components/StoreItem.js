//icons
import coin from '../icons/coin.svg'
import razer from '../icons/razer.png'

// components
import Icon from './Icon'

// styles
import '../styles/storeItem.css'


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

const Section = ({ text }) => <div className='font-thin text-sm pb-2'>{text}</div>
const Name = ({ text }) => <div className='text-lg'>{text}</div>
const Description = () => {
  return (
    <div className='border-t-2 pt-3 text-left'>
      <Section text='Keyboards' />
      <div className='flex flex-row '>
        <Name text='Razer Blackwidow' />
        <div className='flex ml-auto'>10<Icon style={{ width: '30px' }} icon={coin}/></div>
      </div>
    </div>
  )
}

const RedeemButton = () => {
  return (
    <button className='redeem-button'>
      Redeem
    </button>
  )
}

const StoreItem = () => {
  return (
    <div className='store-item'>
      <ItemImage image={razer} />
      <Description />
      <RedeemButton />
    </div>
  )
}

export default StoreItem