import React, { useState } from 'react'
import classes from './Profile.module.css'
import { Container } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router'
import { FormControl, InputLabel, Select, TextField, Button, Typography } from '@material-ui/core';
import { validateEmail } from '../../validate/validate';
import { changeUserData } from '../../store/actions'
import {  useDispatch } from 'react-redux'

export const Profile = () => {
  const { users } = useSelector(state => state);
  const match = useRouteMatch('/user/:id');
  const dispatch = useDispatch();

  let userIndex = 0;
  const currentUser = users.filter((user, index)=> {
    if(`/user/:${user.id}` === match.url) {
      userIndex = index
      return true
    }
    return false
  })[0];
  
  

  const [user, setUser] = useState({...currentUser})

  const changeEmailHandler = (e) => {
    const valueArr = e.target.value.split(' ');

    const value = valueArr.join('');
    
    setUser({
      ...user,
      email: value,
      emailTouched: true
    })

  }

  const changeFullNameHandler = e => {
    const value = e.target.value

    setUser({
      ...user,
      fullName: value,
     })

  }

  const changeGenderHandler = e => {
    const value = e.target.value
    
    setUser({
      ...user,
      gender: value
    })
  }

  const isValidUser = () => {
    return validateEmail(user.email) && user.gender && user.fullName 
  }

  const buttonClickHandler = () => {
    dispatch(changeUserData({user, userIndex}));
}

  return(
    <div className={classes.Profile}>
      <Container>
      <Typography variant='h3' component='h1'>Пользователь</Typography>
        <div className={classes.user}>
          <span>Email: {currentUser.email}</span>
          <span>ФИО: {currentUser.fullName}</span>
          <span>Пол: {currentUser.gender}</span>
        </div>
        <Typography variant='h5' component='h2'>Изменить</Typography>
        <form>
          <TextField 
          type='email' 
          id='user-email' 
          label='Email' 
          variant='outlined' 
          margin='normal'
          required
          value={user.email}
          onChange={changeEmailHandler}
          />
          {
            !validateEmail(user.email) && user.emailTouched
            ?
            (<span className={classes.error}>Введите корректный email</span>)
            :
            null
          }
          
          <TextField 
          id='user-full-name-id' 
          label='ФИО' 
          variant='outlined' 
          margin='normal'
          value={user.fullName}
          onChange={changeFullNameHandler}
          />

          <FormControl>
            <InputLabel id='user-gender-select-label'>Пол</InputLabel>
            <Select
              labelId='user-gender-select-label'
              id='user-gender-select'
              value={user.gender}
              native={true}
              style={{maxWidth: '150px', marginBottom: '20px'}}
              onChange={changeGenderHandler}
            >
              <option value=''></option>
              <option value='Мужской'>Мужской</option>
              <option value='Женский'>Женский</option>
            </Select>
          </FormControl>
          
          <Button 
            variant='outlined' 
            color='primary' 
            onClick={buttonClickHandler}
            disabled={!isValidUser()}
          >
            Сохранить
          </Button>
        </form>
      </Container>
    </div>
    
  )
}