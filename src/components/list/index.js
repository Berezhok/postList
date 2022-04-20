import React from 'react'
import { PostCard } from '../Card'
import "../list/index.css"
import Grid from '@mui/material/Grid';


export const List = ({list}) => {
    console.log(list);
  
 return (
 <div className='main__container'>
     
 
 {list?.map((item,i)=> (
 
     <PostCard key={i} itemPost={item}/>
 ))
}
</div>
 )
}


