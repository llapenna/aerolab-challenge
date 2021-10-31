// core

// actions
import { nextPage, previousPage } from '../reducers/filterReducer'

// components
import Icon from './Icon'

// assets
import leftIcon from '../assets/chevron-left.svg'
import rightIcon from '../assets/chevron-right.svg'
import { useDispatch, useSelector } from 'react-redux'

const PageSelector = () => {
  const dispatch = useDispatch()
  const page = useSelector(store => store.filter.page)

  return (
    <div className='bg-white rounded-md flex flex-row mx-auto my-5 divide-x page-selector'>
      <button
        onClick={() => dispatch(previousPage())}
      >
        <Icon icon={leftIcon} style={{ width: '35px' }} className='sort-option rounded-l-md'/>
      </button>
      <div className='px-2 text-2xl text-black'>{page}</div>
      <button
        onClick={() => dispatch(nextPage())}
      >
        <Icon icon={rightIcon} style={{ width: '35px' }} className='sort-option rounded-r-md' />
      </button>
    </div>
  )
}
export default PageSelector