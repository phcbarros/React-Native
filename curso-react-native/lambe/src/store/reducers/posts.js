import { SET_POSTS, CREATING_POST, POST_CREATED } from '../actions/posts'

const initialState = {
  posts: [],
  isUploading: false,
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_POSTS:
      return { ...state, posts: payload }
    case CREATING_POST:
      return { ...state, isUploading: true }
    case POST_CREATED:
      return { ...state, isUploading: false }
    default:
      return state
  }
}

export default reducer
