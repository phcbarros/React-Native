const initialState = {
  posts: [],
}
import { ADD_POST, ADD_COMMENT, SET_POSTS } from '../actions/posts'

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_POSTS:
      return { ...state, posts: payload }
    case ADD_POST:
      return {
        ...state,
        posts: state.posts.concat({ ...payload }),
      }
    case ADD_COMMENT:
      return {
        ...state,
        posts: state.posts.map((post) => addComment(post, payload)),
      }
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
