import React from 'react'
import { CreateUser } from '../components/CreateUser/CreateUser'
import classes from './Home.module.css'

export const Home = () => {
  return(
    <div className={classes.Home}>
      <CreateUser/>
    </div>
    
  )
}