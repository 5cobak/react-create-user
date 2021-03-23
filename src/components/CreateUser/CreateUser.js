import React from 'react';
import classes from './CreateUser.module.css';
import { makeStyles, FormControl, InputLabel, MenuItem, Select, Typography,Container, TextField, Button } from '@material-ui/core';

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

export function CreateUser (props) {
  
  const materialStyles = useStyles();

  return (
    <div className={classes.CreateUser}>
      <Container>
        <Typography variant='h2' component='h1'>Создать пользователя</Typography>
        <form>
          <TextField id='user-email' label='Email' variant='outlined' margin='normal'/>
          
          <TextField id='user-full-name-id' label='ФИО' variant='outlined' margin='normal'/>

          <FormControl className={materialStyles.formControl}>
            <InputLabel id="user-age-select-label">Пол</InputLabel>
            <Select
              labelId="user-age-select-label"
              id="user-age-select"
              className={materialStyles.Select}
            >
              <MenuItem value={20} selected>Мужской</MenuItem>
              <MenuItem value={30}>Женский</MenuItem>
            </Select>
          </FormControl>
          
          <Button className={materialStyles.button} variant="outlined" color="primary" disableElevation>Создать</Button>
        </form>
      </Container>
    </div>
    
   
  );
}

export default CreateUser;