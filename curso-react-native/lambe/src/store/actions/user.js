export const USER_LOGGED_IN = 'USER_LOGGED_IN'
export const login = (user) => {
  return {
    type: USER_LOGGED_IN,
    payload: user,
  }
}

export const USER_LOGGED_OUT = 'USER_LOGGED_OUT'
export const logout = () => {
  return {
    type: USER_LOGGED_OUT,
  }
}
