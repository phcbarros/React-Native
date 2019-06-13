export const ADD_POST = 'ADD_POST'
export const addPost = (post) => {
  return {
    type: ADD_POST,
    payload: post,
  }
}

export const ADD_COMMENT = 'ADD_COMMENT'
export const addComment = (comment) => {
  return {
    type: ADD_COMMENT,
    payload: comment,
  }
}
