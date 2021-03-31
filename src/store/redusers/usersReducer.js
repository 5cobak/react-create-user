import {createReducer} from '@reduxjs/toolkit'


const initialState = {
  users: [
],
  currentUser: null,
  filteredBy: ''
}

export const usersReducer = createReducer(initialState, builder => {
  builder
    .addCase('ADD_USER', (state, action) => {
      state.users.unshift(action.payload)
    })
    .addCase('FILTER_GENDER', (state, action)=>{
      state.filteredBy = action.payload
    })
    .addCase('CHANGE_USER_DATA', (state, action)=>{
      console.log(state.users[action.payload.userIndex]);
      
      state.users[action.payload.userIndex] = {
        ...state.users[action.payload.userIndex], 
        email: action.payload.user.email || state.users[action.payload.userIndex].email,
        fullName: action.payload.user.fullName || state.users[action.payload.userIndex].fullName,
        gender: action.payload.user.gender || state.users[action.payload.userIndex].gender,
      }
    })
})