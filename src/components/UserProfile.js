// core
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

// icons
import coin from '../icons/coin.svg'

// services
import historyService from '../services/history'

// styles
import '../styles/user.css'

const RedeemedItem = ({ product }) => {
  return (
    <div className='redeemed-item'>
      <img src={product.img.url} alt='product' className='h-10 md:h-24'/>
      <div className='px-5 py-auto flex flex-row w-full justify-between'>
        <div className='my-auto flex flex-col'>
          <div className='font-thin text-xs'>{product.category}</div>
          <div className='md:text-lg'>{product.name}</div>
        </div>
        <div className='my-auto flex flex-row md:text-lg'>
          {product.cost}
          <img src={coin} alt='coin'/>
        </div>
      </div>
    </div>
  )
}

const HeaderMessage = ({ name, points }) => (
  <div className='mx-auto text-center'>
    <div className='text-4xl font-semibold mb-5'>
      This is your space, <u>{name}</u>
    </div>
    <div className='text-lg mx-5'>
      You've accumulated <span>{points}</span> points so far!
    </div>
  </div>
)

const UserProfile = () => {
  const user = useSelector(store => store.user)

  const [history, setHistory] = useState([])

  useEffect(() => {
    historyService
      .getAll()
      .then(history => setHistory(history))
  }, [])

  return (
    <div className='text-white'>

      <HeaderMessage name={user.name} points={user.points} />

      <div className='mx-8 mt-8 text-center md:text-left md:mx-10'>
        <div className='text-lg'>Redeem History</div>
        <div className='grid grid-cols-1 md:grid-cols-2'>

          { history.map(h => <RedeemedItem key={h.createDate} product={h} />)}

        </div>
      </div>
    </div>
  )
}

export default UserProfile