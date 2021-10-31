const initial = {
  value: '',
  order: '',
  categories: [],
  page: 0,
  itemsPerPage: 12,
}

// actions types
const SET_VALUE = 'filter/SET_VALUE'
const SET_ORDER = 'filter/SET_ORDER'

const ADD_CATEGORY = 'filter/SET_CATEGORY'
const REMOVE_CATEGORY = 'filter/REMOVE_CATEGORY'

const NEXT_PAGE = 'filter/NEXT_PAGE'
const PREV_PAGE = 'filter/PREV_PAGE'
const PAGE_ZERO = 'filter/PAGE_ZERO'

const CLEAR = 'filter/CLEAR'

// selectors
export const filterProducts = store => {
  const itemsPerPage = 12
  const { value, order, categories, page } = store.filter

  let modifiedArray

  value
    ? modifiedArray = store.products.filter(p => p.name.toLowerCase().includes(value.toLowerCase()))
    : modifiedArray = store.products

  if (categories.length > 0) {
    modifiedArray = modifiedArray.filter(a => categories.indexOf(a.category) !== -1)
  }

  modifiedArray = modifiedArray.slice(page * itemsPerPage, (page + 1) * itemsPerPage)

  if (order === 'ASC')
    modifiedArray.sort((a, b) => a.cost - b.cost)
  if (order === 'DESC')
    modifiedArray.sort((a, b) => b.cost - a.cost)

  return modifiedArray
}


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
    case NEXT_PAGE:
      return { ...state, page: state.page + 1 }
    case PREV_PAGE:
      return { ...state, page: state.page - 1 }
    case PAGE_ZERO:
      return { ...state, page: 0 }
    case CLEAR:
      return null
    default:
      return state
  }
}

// action creators
export const setFilterValue = filter => {
  return dispatch => {
    dispatch({
      type: SET_VALUE,
      data: filter
    })
    dispatch({
      type: PAGE_ZERO
    })
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
  return dispatch => {
    dispatch({
      type: ADD_CATEGORY,
      data: category
    })
    dispatch({
      type: PAGE_ZERO
    })
  }
}
export const removeCategory = category => {
  return dispatch => {
    dispatch({
      type: REMOVE_CATEGORY,
      data: category
    })
    dispatch({
      type: PAGE_ZERO
    })
  }
}

export const nextPage = () => {
  return (dispatch, getState) => {

    const nextPage = getState().filter.page + 1
    const itemsPerPage = getState().filter.itemsPerPage

    if (getState().products.slice(nextPage * itemsPerPage, (nextPage + 1) * itemsPerPage).length > 0)
      return dispatch({
        type: NEXT_PAGE
      })
  }
}
export const previousPage = () => {
  return (dispatch, getState) => {
    if (getState().filter.page !== 0){
      dispatch({
        type: PREV_PAGE
      })
    }
  }
}

export default reducer