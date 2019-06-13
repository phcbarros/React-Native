const initialState = {
  posts: [
    {
      id: Math.random(),
      nickname: 'Paulo Barros',
      email: 'phcbcontato@outlook.com',
      image: require('../../../assets/imgs/fence.jpg'),
      comments: [
        {
          nickname: 'Elisa Fernandes',
          comment: 'Que lindo amor!',
        },
        {
          nickname: 'Ian Muller',
          comment: 'Não é Pokémon =/',
        },
      ],
    },
    {
      id: Math.random(),
      nickname: 'Paulo Barros',
      email: 'phcbcontato@outlook.com',
      image: require('../../../assets/imgs/bw.jpg'),
      comments: [
        {
          nickname: 'Elisa Fernandes',
          comment: 'Bora!',
        },
      ],
    },
  ],
}
import { ADD_POST, ADD_COMMENT } from '../actions/posts'

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
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
