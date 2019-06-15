import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import userReducer from './reducers/user'
import postsReducer from './reducers/posts'
import messageReducer from './reducers/message'

const reducers = combineReducers({
  user: userReducer,
  posts: postsReducer,
  message: messageReducer,
})

const storeConfig = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
}

export default storeConfig
