const initialState = {
  posts: [],
  isUploading: false,
}
import {
  ADD_COMMENT,
  SET_POSTS,
  CREATING_POST,
  POST_CREATED,
} from '../actions/posts'

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_POSTS:
      return { ...state, posts: payload }
    case ADD_COMMENT:
      return {
        ...state,
        posts: state.posts.map((post) => addComment(post, payload)),
      }
    case CREATING_POST:
      return { ...state, isUploading: true }
    case POST_CREATED:
      return { ...state, isUploading: false }
    default:
      return state
  }
}

const addComment = (post, payload) => {
  if (post.id === payload.postId) {
    if (post.comments) {
      post.comments = post.comments.concat(payload.comment)
    } else {
      post.comments = [payload.comment]
    }
  }
  return post
}

export default reducer
