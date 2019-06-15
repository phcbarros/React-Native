import axios from 'axios'

export const ADD_POST = 'ADD_POST'
export const addPost = (post) => {
  return async (dispatch) => {
    try {
      const upload = await axios({
        url: 'uploadImage',
        baseURL: 'https://us-central1-lambe-99df9.cloudfunctions.net',
        method: 'post',
        data: {
          image: post.image.base64,
        },
      })

      post.image = upload.data.imageUrl
      const res = await axios.post('/posts.json', {
        post: { ...post },
      })

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
