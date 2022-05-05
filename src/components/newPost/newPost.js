
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Grid, TextField } from '@mui/material'
import api from '../../utils/api';

export const NewPost = ({changeList}) => {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
      event.preventDefault()
      const {target:{ image, name, description}} = event;
      api.addPost({
        image: image.value,
        title: name.value,
        text: description.value,
      })
      .then((data)=>{
        changeList((prevState) => [data, ...prevState])
        navigate('/')
      })
      .catch((err)=>alert("err"))
    }
    
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <Grid container  flexDirection="column"  spacing="5">
        <Grid item>
            <TextField 
              variant="outlined"
              name="image"
              placeholder='ссылка'/>
        </Grid>
        <Grid item>
            <TextField 
              variant="outlined"
              name="name"
              placeholder='название'/>
        </Grid>
        <Grid item>
            <TextField 
              variant="outlined"
              name="description"
              placeholder='текст'/>
        </Grid>
      </Grid>
      <button className="createButton">Cоздать пост</button>
    </form>
    </div>
  )
}
