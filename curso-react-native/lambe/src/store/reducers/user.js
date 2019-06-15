const initialState = {
  name: null,
  email: null,
  isLoading: false,
}
import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  LOADING_USER,
  LOADED_USER,
} from '../actions/user'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      const { name, email } = action.payload
      return { ...state, name, email }
    case USER_LOGGED_OUT:
      return { ...initialState }
    case LOADING_USER:
      return { ...state, isLoading: true }
    case LOADED_USER:
      return { ...state, isLoading: false }
    default:
      return state
  }
}

export default reducer
