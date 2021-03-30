import {createReducer} from '@reduxjs/toolkit'


const initialState = {
  users: [{
    id: 1,
    email: 'i@mail.ru',
    fullName: 'Арсланов Исмагиль',
    gender: 'Мужской'
  }],
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
      state.users[action.payload.index] = {
        ...state.users[action.payload.index], 
        email: action.payload.email || state.users[action.payload.index].email,
        fullName: action.payload.fullName || state.users[action.payload.index].fullName,
        gender: action.payload.gender || state.users[action.payload.index].gender,
      }
    })
})