// services
import productsService from '../services/products'

const initial = []

// action types
const SET = 'products/SET'

// reducer
const reducer = (state = initial, action) => {
  switch (action.type) {
    case SET:
      return action.data
    default:
      return state
  }
}

// action creators
export const setProducts = () => {
  return async dispatch => {
    const products = await productsService.getAll()

    dispatch({
      type: SET,
      data: products
    })
  }
}

export default reducer