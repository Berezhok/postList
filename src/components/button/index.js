import React from 'react'
import Button from '@mui/material/Button';
import "../button/index.css"

export const CreatePost = () => {
  return (
    <Button className='btn' type='submit' variant="contained" onClick={(event)=>console.log("есть контакт")}>
        Добавить пост
        </Button>
  )
}
