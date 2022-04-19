import React from 'react'
import { Card } from '../Card'

export const List = ({list}) => {
    console.log(list);
  
 return (
 <>
 
 {list?.map((item,i)=> (
    <Card key={i} itemPost={item}/> )
    )
    }
</>
 )
}

