import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import classes from './CreateUser.module.css';
import { 
  makeStyles, FormControl, InputLabel, Select, 
  Typography, 
  TextField, Button 
} from '@material-ui/core';
import { addUser } from '../../store/actions';

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
  const state = useSelector(state => state);
  console.log(state);
  
  
  const dispatch = useDispatch();
  
  const materialStyles = useStyles();

  const user = {};

  const changeEmailHandler = (e) => {
    user.email = e.target.value;
  }

  const changeFullNameHandler = e => {
    user.fullName = e.target.value
  }

  const changeGenderHandler = e => {
    user.gender = e.target.value
    
  }

  const buttonClickHandler = () => {
    dispatch(addUser(user))
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
          />
          
          <TextField 
          id='user-full-name-id' 
          label='ФИО' 
          variant='outlined' 
          margin='normal'
          onChange={changeFullNameHandler}
          />

          <FormControl className={materialStyles.formControl}>
            <InputLabel id="user-age-select-label">Пол</InputLabel>
            <Select
              labelId="user-age-select-label"
              id="user-age-select"
              className={materialStyles.Select}
              onChange={changeGenderHandler}
              defaultValue={''}
              native={true}
            >
              <option value=''></option>
              <option value='Male'>Мужской</option>
              <option value='Female'>Женский</option>
            </Select>
          </FormControl>
          
          <Button 
            className={materialStyles.button} 
            variant="outlined" 
            color="primary" 
            onClick={buttonClickHandler}
          >
            Создать
          </Button>
        </form>
    </div>
    
   
  );
}

export default CreateUser;