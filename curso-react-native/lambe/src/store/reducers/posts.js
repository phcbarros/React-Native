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
import { ADD_POST } from '../actions/posts'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: state.posts.concat({ ...action.payload }),
      }
    default:
      return state
  }
}

export default reducer
