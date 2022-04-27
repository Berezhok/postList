import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { name } from '../list';
import "../Card/index.css"

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FavoriteBorderOutlined } from '@mui/icons-material';
import { Like } from '../like';
import api from '../../utils/api';
import DeleteIcon from '@mui/icons-material/Delete';



export const PostCard = ({itemPost, isInLike, setLike,isMyPost}) => {
  const {title, author, likes ,created_at, text,image} = itemPost
  const [liked,setLiked] = useState(itemPost.likes.length) 
  


  const writeLS = (key,value) => {
    const storage = JSON.parse(localStorage.getItem(key)) || []
    storage.push(value)
    localStorage.setItem(key,JSON.stringify(storage))
  }

  const removeLS = (key,value) => {
    const storage = JSON.parse(localStorage.getItem(key))
    const removeStorage = storage.filter((itemID) => value !== itemID )
    localStorage.setItem(key,JSON.stringify(removeStorage))
  }

  const addLikeOnCard = () => {
    writeLS("like",itemPost._id)
    setLike((prevState) => [...prevState,itemPost._id])
    api
    .addLike(itemPost._id)
    .then((addedLike)=>{
    setLiked(addedLike.likes.length)
  })
      .catch((err)=>
        alert(`ошибка`)
      )
  };

  const deleteLikeOnCard = () => {
    removeLS("like",itemPost._id)
    setLike((prevState) => 
    prevState?.filter((itemID) => itemPost._id !== itemID ))
    api
    .deleteLike(itemPost._id)
    .then((removeLike)=>{
      setLiked(removeLike.likes.length)}) 
      .catch((err)=>
        alert(`ошибка`)
      )
  };

  const deletePost = () => {
    api.deletePost(itemPost._id)
        .then((deletePost)=>{ 
        {deletePost} })
        .catch((err)=> alert("вы не можете удалить чужой пост"))
  }


    return (
    <div className='main__card'>
    <Card sx={{ width: 400, height:350}}>
      <CardContent>
        <Typography sx={{ fontSize: 26 }}  color="blue" gutterBottom>
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <p className='block__img_mail'>
            <img src={image}/>
            {author.email}
          </p>
         </Typography>
        <Typography sx={{maxHeight:75 , overflow:"hidden"}} >
          {text}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
             Создан {created_at}
          </Typography>
          </CardContent>
          <div>
       {isInLike ? (
          <IconButton  onClick={deleteLikeOnCard}>
            <FavoriteIcon fontSize="small"  />
            <p style={{ fontSize: "small" }}>{liked}</p>
          </IconButton>
        ) : (
          <IconButton onClick={addLikeOnCard}  >
            <FavoriteBorderIcon fontSize="small" />
            <p style={{ fontSize: "small" }}>{liked}</p>
          </IconButton>
        )}
          <IconButton onClick={ deletePost } aria-label="delete">
                <DeleteIcon  />
          </IconButton>
          </div>
        </Card>
  </div>
  )
}

