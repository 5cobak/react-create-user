import React from 'react'
import { NavLink } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import Container from '@material-ui/core/Container';
import classes from './Header.module.css'

export const Header = () => {
  return(
      <AppBar className={classes.header} position='static'>
        <Container>
          <ToolBar>
            <NavLink to={'/'}>
              Главная
            </NavLink>
          </ToolBar>
        </Container>
      </AppBar>
  )
}