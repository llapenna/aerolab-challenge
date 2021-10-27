const initial = ''

// actions types
const SET = 'filter/SET'
const CLEAR = 'filter/CLEAR'

// reducer
const reducer = (state = initial, action) => {
  switch (action.type) {
    case SET:
      return action.data
    case CLEAR:
      return ''
    default:
      return state
  }
}

// action creators
export const setFilter = filter => {
  return {
    type: SET,
    data: filter
  }
}

export default reducer