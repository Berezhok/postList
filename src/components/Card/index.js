import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { name } from '../list';
import "../Card/index.css"
import { height } from '@mui/system';
import { Like } from '../like';




export const PostCard = ({itemPost}) => {
  const {title, author, likes,created_at, text,image} = itemPost
  return (
    <div className='main__card'>
    <Card sx={{ width: 300, height:300}}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="blue" gutterBottom>
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <div className='block__img_mail'>
            <div><img src={image}/></div>
            <div>{author.email}</div>
          </div>
        
          </Typography>
        <Typography>
          {text}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
             Создан {created_at}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            <div className='like__block'>
            <Like/>{likes.length}
            </div>
          </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
  </div>
  )
}
