const intitalState = { name: null, email: null }
import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../actions/user'

const reducer = (state = intitalState, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      const { name, email } = action.payload
      return { ...state, name, email }
    case USER_LOGGED_OUT:
      return { ...intitalState }
    default:
      return state
  }
}

export default reducer
