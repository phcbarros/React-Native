import { SET_MESSAGE } from '../actions/message'

const initialState = {
  title: '',
  text: '',
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_MESSAGE:
      return { ...state, title: payload.title, text: payload.text }
    default:
      return state
  }
}

export default reducer
