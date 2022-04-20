import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { name } from '../list';
import { Like } from '../like/like';
import Grid from '@mui/material/Grid';



export const PostCard = ({itemPost}) => {
  const {title, author, name, likes,created_at, text} = itemPost
  return (
    <div>
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {text}
          </Typography>
        <Typography>
          {author.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
             Создан {created_at}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
             сердце лайка {likes.length}
          </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
  </div>
  )
}
