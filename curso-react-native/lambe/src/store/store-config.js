import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import userReducer from './reducers/user'

const reducers = combineReducers({
  user: userReducer,
})

const storeConfig = () => {
  return createStore(reducers, composeWithDevTools())
}

export default storeConfig
