

const initial = {
  message: '',
  success: false
}

// action types
const SET_ERROR = 'notification/SET_ERROR'
const SET_SUCCESS ='notification/SET_SUCCESS'
const CLEAR ='notification/CLEAR'

// reducer
const reducer = (state = initial, action) => {
  switch (action.type) {
    case SET_ERROR:
      return { message: action.data, success: false }
    case SET_SUCCESS:
      return { message: action.data, success: true }
    case CLEAR:
      return initial
    default:
      return state
  }
}

// action creators
export const setSuccess = message => {
  return async dispatch => {
    dispatch({
      type: SET_SUCCESS,
      data: message
    })

    setTimeout(() => dispatch({
      type: CLEAR,
    }), 5 * 1000)
  }
}

export const setError = message => {
  return async dispatch => {
    dispatch({
      type: SET_ERROR,
      data: message
    })

    setTimeout(() => dispatch({
      type: CLEAR,
    }), 5 * 1000)
  }
}

export default reducer