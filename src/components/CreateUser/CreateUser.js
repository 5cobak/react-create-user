import React, { useState } from 'react';
import {  useDispatch } from 'react-redux'
import classes from './CreateUser.module.css';
import { 
  makeStyles, FormControl, InputLabel, Select, 
  Typography, 
  TextField, Button 
} from '@material-ui/core';
import { addUser } from '../../store/actions';
import { validateEmail } from '../../validate/validate'

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
    maxWidth: 200
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 100,
    maxWidth: 100
  },
}))


export function CreateUser () {
  
  const [user, setUser] = useState({
    id: 0,
    email: '',
    fullName: '',
    gender: ''
  })

  const dispatch = useDispatch();
  
  const materialStyles = useStyles();

  const changeEmailHandler = (e) => {
    const valueArr = e.target.value.split(' ');

    const value = valueArr.join('');
    
    setUser({
      ...user,
      emailTouched: true,
      email: value
    })

  }

  const changeFullNameHandler = e => {
    const value = e.target.value

    setUser({
      ...user,
      fullName: value,
      fullNameTouched: true,
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
      setUser({
        ...user,
        id: user.id++
      })
      dispatch(addUser(user));
      clearFrom()
  }

  const clearFrom = () => {
    setUser({
      ...user,
      email: '',
      fullName: '',
      gender: '',
      emailTouched: false,
      fullNameTouched: false
    })
  }

  return (
    <div className={classes.CreateUser} >
        <Typography variant='h2' component='h1'>Создать пользователя</Typography>
        <form>
          <TextField 
          type='email' 
          id='user-email' 
          label='Email' 
          variant='outlined' 
          margin='normal'
          onChange={changeEmailHandler}
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
          onChange={changeFullNameHandler}
          value={user.fullName}
          />

          <FormControl className={materialStyles.formControl}>
            <InputLabel id="user-gender-select-label">Пол</InputLabel>
            <Select
              labelId="user-gender-select-label"
              id="user-gender-select"
              className={materialStyles.Select}
              onChange={changeGenderHandler}
              value={user.gender}
              native={true}
            >
              <option value=''></option>
              <option value='Мужской'>Мужской</option>
              <option value='Женский'>Женский</option>
            </Select>
          </FormControl>
          
          <Button 
            className={materialStyles.button} 
            variant="outlined" 
            color="primary" 
            onClick={buttonClickHandler}
            disabled={!isValidUser()}
          >
            Создать
          </Button>
        </form>
    </div>
  );
}

export default CreateUser;