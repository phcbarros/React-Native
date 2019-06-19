import axios from 'axios'
import { showError } from '../../resource/common'

export const addPost = (post) => {
  return async (dispatch, getState) => {
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
      await axios.post(`/posts.json?auth=${getState().user.token}`, {
        ...post,
      })
      dispatch(fetchPosts())
    } catch (error) {
      console.log(error)
      dispatch(showError)
    } finally {
      dispatch(postCreated())
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
      dispatch(showError)
    }
  }
}

export const addComment = (payload) => {
  return async (dispatch, getState) => {
    try {
      const url = `/posts/${payload.postId}.json?auth=${getState().user.token}`
      const res = await axios.get(url)
      const comments = res.data.comments || []
      comments.push(payload.comment)

      await axios.patch(url, { comments })
      dispatch(fetchPosts())
    } catch (error) {
      console.log(error)
      dispatch(showError('Erro!', 'Erro ao adicionar comentário'))
    }
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
