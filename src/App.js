import React, { useEffect, useState } from 'react';
import { Header } from './components/header';
import { List } from './components/list';
import { Routes, Route, Link } from "react-router-dom";
import "../src/style.css"
import { Footer } from './components/footer';
import api from './utils/api';
import { Item } from './components/item/item';
import { NewPost } from './components/newPost/newPost';
import { Context } from './components/context/cont';


export const App = () => {
    const [postsList, setPostsList] = useState(null);
    const [user, setUser] = useState("");
    const [avatar, setAvatar] = useState("https://i.ytimg.com/vi/PbbNMgPVfqs/maxresdefault.jpg");
    const [like, setLike] = useState(JSON.parse(localStorage.getItem("like"))) // проверяет состояние лс по лайкам
    
    
    useEffect(() => {
        api.getPosts()
            .then((result) => setPostsList(result))
            .catch((err)=>alert("ошибка"))
            },[])
            
    useEffect(()=>{
        api.getUserInfo()
        .then(res => res.json())
            .then((user) =>setUser(user))
            .catch((err)=>alert("ошибка"))
            },[])
        
            
  
    
    // useEffect(()=>{
    //     api.getAvatar()
    //     .then(res => res.json())
    //         .then((data) => setAvatar(data))
    //         },[])


    return (
        <Context.Provider>
        <div className='main__body'>
           <Header user={user} avatarUser={avatar}/>
           <Routes>
            <Route path="/" element={
                <List
                setPostsList={setPostsList}
                user={user}
                list={postsList}
                like={like}
                setLike={setLike}/>}
            />
            <Route path="posts/:postId" element={<Item />} />
            <Route path="posts/create" element={<NewPost changeList={setPostsList}/>} />

            </Routes>

           <Footer/>
           
        </div>
        </Context.Provider>
    );
};


// about: "Студент"
// avatar: "https://i.ytimg.com/vi/PbbNMgPVfqs/maxresdefault.jpg"
// email: "maxim@mail.ru"
// name: "Антон Бережок"
// __v: 0
// _id: "624c50e47c57d93142703808"

