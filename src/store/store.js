import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { usersReducer } from './redusers/usersReducer'

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

const store = configureStore({
  reducer: usersReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
})

export default store