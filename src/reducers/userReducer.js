// services
import userService from '../services/user'

const initial = {
  _id: null,
  name: '',
  points: 0,
  createDate: null,
  redeemHistory: []
}

// action types
const SET = 'user/SET'
const INCREMENT_POINTS = 'user/INCREMENT_POINTS'

// reducer
const reducer = (state = initial, action) => {
  switch (action.type) {
    case SET:
      return action.data
    case INCREMENT_POINTS:
      return { ...state, points: action.data }
    default:
      return state
  }
}

// action creators
export const setUser = () => {
  return async dispatch => {
    const user = await userService.get()

    dispatch({
      type: SET,
      data: user
    })
  }
}

export const addPoints = points => {
  return async dispatch => {
    const newPoints = await userService.addPoints(points)

    dispatch({
      type: INCREMENT_POINTS,
      data: newPoints
    })
  }
}

export default reducer