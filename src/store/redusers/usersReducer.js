import {createReducer} from '@reduxjs/toolkit'


const initialState = {
  users: []
}

export const usersReducer = createReducer(initialState, builder => {
  builder
    .addCase('ADD_USER', (state, action) => {
      // "mutate" the array by calling push()
      state.users.push(action.payload)
    })
})