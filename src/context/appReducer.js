import ADD_USERS from './types'

const handlers = {
  [ADD_USERS]: (state, {payload}) => ({...state, users: [...state.users, payload]}),
  DEFAULT: state => state 
}

export const appReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT

  return handler(state, action)
}