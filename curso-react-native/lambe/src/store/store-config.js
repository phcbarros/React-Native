import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import userReducer from './reducers/user'
import postsReducer from './reducers/posts'

const reducers = combineReducers({
  user: userReducer,
  posts: postsReducer,
})

const storeConfig = () => {
  return createStore(reducers, composeWithDevTools())
}

export default storeConfig
