import axios from 'axios'

export const addPost = (post) => {
  return async (dispatch) => {
    dispatch(creatingPost())
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
      dispatch(fetchPosts())
      dispatch(postCreated())
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
      dispatch(setPosts(posts.reverse()))
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

export const CREATING_POST = 'CREATING_POST'
export const creatingPost = () => {
  return {
    type: CREATING_POST,
  }
}

export const POST_CREATED = 'POST_CREATED'
export const postCreated = () => {
  return {
    type: POST_CREATED,
  }
}
