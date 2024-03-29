import React from 'react'
import { CreatePost } from '../button'
import  "../header/index.css"
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';

export const Header = ({user,avatarUser}) => {
  return (
    <div className='header__line'>
        <div className="header__block">
            <div>
            <Link to="/">Logo</Link>    
            </div>
            <div>
                <a href='#'>Home</a>
                <a href='#'>Docs</a>
                <a href='#'>GitHub</a>
            </div>
            <div className='right__block'>
            <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} >
          <img style={{width:"70px",height:"40px"}} src={user.avatar}/>
          </Avatar>
        }
        
        title={user.name} 
        
      /> 
            </Card>   
        <CreatePost/>
                </div>
            
        </div>
        <hr/>
    </div>
  )
}
