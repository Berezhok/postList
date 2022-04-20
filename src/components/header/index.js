import React from 'react'
import { CreatePost } from '../button'
import  "../header/index.css"

export const Header = () => {
  return (
    <div className='header__line'>
        <div className="header__block">
            <div>
                Logo
            </div>
            <div>
                <a href='#'>Home</a>
                <a href='#'>Docs</a>
                <a href='#'>GitHub</a>
            </div>
            <div>
                <CreatePost/>
            </div>
        </div>
        <hr/>
    </div>
  )
}
