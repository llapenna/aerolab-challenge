const initial = {
  value: '',
  order: ''
}

// actions types
const SET_VALUE = 'filter/SET_VALUE'
const SET_ORDER = 'filter/SET_ORDER'
const CLEAR = 'filter/CLEAR'

// reducer
const reducer = (state = initial, action) => {
  switch (action.type) {
    case SET_VALUE:
      return { ...state, value: action.data }
    case SET_ORDER:
      return { ...state, order: action.data }
    case CLEAR:
      return ''
    default:
      return state
  }
}

// action creators
export const setFilterValue = filter => {
  return {
    type: SET_VALUE,
    data: filter
  }
}

export const setOrderASC = () => {
  return {
    type: SET_ORDER,
    data: 'ASC'
  }
}

export const setOrderDESC = () => {
  return {
    type: SET_ORDER,
    data: 'DESC'
  }
}

export default reducer