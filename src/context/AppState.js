import React, { useReducer } from 'react'
import { AppContext } from './AppContext'
import { appReducer } from './appReducer'

export const AppState = ({children}) => {

  const initialState = {
    user: {},
    users: [],
  }

  const [state, dispatch] = useReducer(appReducer, initialState)

  return (
    <AppContext.Provider value={{
    }}>
      {children}
    </AppContext.Provider>
  )
}