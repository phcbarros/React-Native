import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import userReducer from './reducers/user'
import postsReducer from './reducers/posts'

const reducers = combineReducers({
  user: userReducer,
  posts: postsReducer,
})

const storeConfig = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
}

export default storeConfig
