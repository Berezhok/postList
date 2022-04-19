import React from 'react'
import  "./style.css"

export const Header = () => {
  return (
    <div>
        <div className="header__block">
            <div>
                Logo
            </div>
            <div>
                <a href='#'>Home</a>
                <a href='#'>Docs</a>
                <a href='#'>GitHub</a>
            </div>
        </div>
        <hr/>
    </div>
  )
}
