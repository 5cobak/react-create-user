import React from 'react'
import {Grid} from '@material-ui/core'
import classes from './UserList.module.css'
import {useSelector} from 'react-redux'

export const UsersList = () => {
  const { users } = useSelector(state => state)
  console.log(users);
  

  return (
    <>
      <Grid container justify='space-between' spacing={3} className={classes.UsersList}>

        { users 
          ? 
          users.map((user, index)=>{
            return (
              <Grid item xs={4} key={index}>
                <div className={classes.item}>
                  <span>ФИО: {user.fullName}</span>
                  <span>Email: {user.fullName}</span>
                  <span>Пол: {user.fullName}</span>
                </div>
              </Grid>
            )
          
          })
          :
          null
      }
        
      </Grid>
    </>
  )
}