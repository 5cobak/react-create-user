import React from 'react'
import classes from './UserList.module.css'
import { useSelector, useDispatch} from 'react-redux'
import { Select, FormControl, InputLabel } from '@material-ui/core';
import { filterGender } from '../../store/actions'
import { NavLink } from 'react-router-dom'

export const UsersList = () => {
  const { users, filteredBy } = useSelector(state => state)
  const dispatch = useDispatch();

  const selectChangeHandler = (e) => {
    const value = e.target.value;
    dispatch(filterGender(value))
  }

  const renderList = (user, index) => {
    return (
      <li className={classes.item} key={index}>
        
        <span>Email: {user.email}</span>
        <span>ФИО: {user.fullName}</span>
        <span>Пол: {user.gender}</span>
        <NavLink to={`/user/:${user.id}`}>Подробнее о пользователе</NavLink>
      </li>
    )
  }

  return (
    <>
      <FormControl style={{minWidth: '200px',marginBottom: '20px'}}>
            <InputLabel id="user-gender-filter-label">Фильтровать по полу</InputLabel>
            <Select
              labelId="user-gender-filter-label"
              id="user-gender-filter"
              native={true}
              onChange={selectChangeHandler}
              defaultValue={filteredBy}
            >
              <option value=''></option>
              <option value='Мужской'>Мужской</option>
              <option value='Женский'>Женский</option>
            </Select>
          </FormControl>
      <ul className={classes.UserList}>
        { users 
          ? 
          users.map((user, index) => {
            if(user.gender === filteredBy) {
              return renderList(user, index)
            }
            else if(!filteredBy){
              return renderList(user, index)
            }
            return null
          })
          :
          null
      }
        
      </ul>
    </>
  )
}