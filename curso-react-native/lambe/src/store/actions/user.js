import axios from 'axios'
import { showError, showMessage } from '../../resource/common'

const authBaseURL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
import { API_KEY } from '../../../configuration.json'

export const USER_LOGGED_IN = 'USER_LOGGED_IN'
export const userLoggedIn = (user) => {
  return {
    type: USER_LOGGED_IN,
    payload: user,
  }
}

const USER_LOGGED_OUT = 'USER_LOGGED_OUT'
export const logout = () => {
  return {
    type: USER_LOGGED_OUT,
  }
}

export const createUser = (user) => {
  return async (dispatch) => {
    dispatch(loadingUser())
    try {
      const res = await axios.post(
        `${authBaseURL}/signupNewUser?key=${API_KEY}`,
        {
          email: user.email,
          password: user.password,
          returnSecureToken: true,
        },
      )

      if (res.data.localId) {
        await axios.put(`users/${res.data.localId}.json`, {
          name: user.name,
        })
        console.log('Usuário criado com sucesso')
        dispatch(loadedUser())
        dispatch(showMessage('Sucesso', 'Usuário criado com sucesso'))
      }
    } catch (error) {
      console.log(error)
      dispatch(showError())
    }
  }
}

export const LOADING_USER = 'LOADING_USER'
export const loadingUser = () => {
  return {
    type: LOADING_USER,
  }
}

export const LOADED_USER = 'LOADED_USER'
export const loadedUser = () => {
  return {
    type: LOADED_USER,
  }
}

export const login = (user) => {
  return async (dispatch) => {
    dispatch(loadingUser())
    try {
      const res = await axios.post(
        `${authBaseURL}/verifyPassword?key=${API_KEY}`,
        {
          email: user.email,
          password: user.password,
          returnSecureToken: true,
        },
      )

      if (res.data.localId) {
        user.token = res.data.tokenId
        const resUser = await axios.get(`/users/${res.data.localId}.json`)
        delete user.password
        user.name = resUser.data.name
        user.id = resUser.data.localId
        dispatch(userLoggedIn(user))
        dispatch(loadedUser())
      }
    } catch (error) {
      console.log(JSON.stringify(error))
      dispatch(showError())
    }
  }
}
