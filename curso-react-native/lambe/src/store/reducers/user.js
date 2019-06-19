const initialState = {
  name: null,
  email: null,
  token: null,
  isLoading: false,
  id: null,
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
      const { name, email, token, id } = action.payload
      return { ...state, name, email, token, id }
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
