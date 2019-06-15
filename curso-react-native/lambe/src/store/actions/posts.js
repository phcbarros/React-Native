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
      await axios.post('/posts.json', {
        ...post,
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export const SET_POSTS = 'SET_POSTS'
export const setPosts = (posts) => {
  return {
    type: SET_POSTS,
    payload: posts,
  }
}

export const fetchPosts = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get('/posts.json')
      const rawPosts = res.data //retorna um objeto e não um array
      const posts = []
      for (let key in res.data) {
        posts.push({
          ...rawPosts[key],
          id: key,
        })
      }
      dispatch(setPosts(posts))
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
