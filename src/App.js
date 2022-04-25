import React, { useEffect, useState } from 'react';
import { Header } from './components/header';
import { List } from './components/list';
import api from './utils/api';
import "../src/style.css"
import { Footer } from './components/footer';



export const App = () => {
    const [postsList, setPostsList] = useState(null);
    const [user, setUser] = useState("");
    // const [avatar, setAvatar] = useState("https://i.ytimg.com/vi/PbbNMgPVfqs/maxresdefault.jpg");

    useEffect(() => {
        api.getPosts()
            .then(res => res.json())
            .then((result) => setPostsList(result))
            },[])

    useEffect(()=>{
        api.getUserInfo()
        .then(res => res.json())
            .then((user) => setUser(user))
            },[])
    
    // useEffect(()=>{
    //     api.getAvatar()
    //     .then(res => res.json())
    //         .then((data) => setAvatar(data))
    //         },[])


    return (
        <div className='main__body'>
           
           <Header user={user} /*avatarUser={avatar}*//>
           <List list={postsList} /> 
           <Footer/>
           
        </div>
    );
};



