import React from 'react'
import { CreateUser } from '../components/CreateUser/CreateUser'
import classes from './Home.module.css'
import { UsersList } from '../components/UsersList/UsersList'
import { Container } from '@material-ui/core'

export const Home = () => {
  return(
    <div className={classes.Home}>
      <Container>
        <CreateUser/>
        <UsersList/>
      </Container>
      
    </div>
    
  )
}