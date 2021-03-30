import React from 'react'
import classes from './Profile.module.css'
import { Container } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router'
import { FormControl, InputLabel, Select, TextField, Button } from '@material-ui/core';
import { validateEmail } from '../../validate/validate';

export const Profile = () => {
  const { users } = useSelector(state => state);
  const match = useRouteMatch('/user/:id');

  const user = users.filter((user)=> `/user/:${user.id}` === match.url)[0];



  return(
    <div className={classes.Profile}>
      <Container>
        <h1>Пользователь:</h1>
        <div className={classes.user}>
          <span>Email: {user.email}</span>
          <span>ФИО: {user.fullName}</span>
          <span>Пол: {user.gender}</span>
        </div>
        <form>
          <TextField 
          type='email' 
          id='user-email' 
          label='Email' 
          variant='outlined' 
          margin='normal'
          required
          value={user.email}
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
          />

          <FormControl>
            <InputLabel id="user-gender-select-label">Пол</InputLabel>
            <Select
              labelId="user-gender-select-label"
              id="user-gender-select"
              value={user.gender}
              native={true}
            >
              <option value=''></option>
              <option value='Мужской'>Мужской</option>
              <option value='Женский'>Женский</option>
            </Select>
          </FormControl>
          
          <Button 
            variant="outlined" 
            color="primary" 

          >
            Изменить
          </Button>
        </form>
      </Container>
    </div>
    
  )
}