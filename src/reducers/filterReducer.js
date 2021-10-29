const initial = {
  value: '',
  order: '',
  categories: []
}

// actions types
const SET_VALUE = 'filter/SET_VALUE'
const SET_ORDER = 'filter/SET_ORDER'
const ADD_CATEGORY = 'filter/SET_CATEGORY'
const REMOVE_CATEGORY = 'filter/REMOVE_CATEGORY'
const CLEAR = 'filter/CLEAR'

// reducer
const reducer = (state = initial, action) => {
  switch (action.type) {
    case SET_VALUE:
      return { ...state, value: action.data }
    case SET_ORDER:
      return { ...state, order: action.data }
    case ADD_CATEGORY: {
      const newCategories = [...state.categories, action.data]
      return { ...state, categories: newCategories }
    }
    case REMOVE_CATEGORY: {
      const newCategories = state.categories.filter(c => c !== action.data)
      return { ...state, categories: newCategories }
    }
    case CLEAR:
      return null
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

export const addCategory = category => {
  return {
    type: ADD_CATEGORY,
    data: category
  }
}

export const removeCategory = category => {
  return {
    type: REMOVE_CATEGORY,
    data: category
  }
}

export default reducer