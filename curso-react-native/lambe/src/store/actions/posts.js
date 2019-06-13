import axios from 'axios'

export const ADD_POST = 'ADD_POST'
export const addPost = (post) => {
  return async (dispatch) => {
    try {
      const res = await axios.post('/posts.json', {
        post: { ...post },
      })
      console.log(res.data)

      return {
        type: ADD_POST,
        payload: post,
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export const ADD_COMMENT = 'ADD_COMMENT'
export const addComment = (comment) => {
  return {
    type: ADD_COMMENT,
    payload: comment,
  }
}
