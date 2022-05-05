import React from 'react'
import { PostCard } from '../Card'
import "../list/index.css"



export const List = ({list,like,setLike,user,setPostList}) => {
    return (
        <>
        <br/>
        <br/><br/><br/><br/>
        <div className='main__container'>
            {list?.map((item)=> (
                <PostCard 
                reloadList={setPostList}
                key={item._id} 
                itemPost={item}
                isInLike = {like?.includes(item._id)}
                list={list}
                setLike={setLike}
                user={user}
                />
                ))
                }
        </div>
        </>
            )
            
        }
       


        // author: {name: 'Максим', about: 'Наставник', avatar: 'https://u.kanobu.ru/articles/pics/7e6dc974-43f4-4ad0-9a55-2465566e9662.jpg', _id: '622bd81b06c7d323b8ae4614', email: 'maxim_91@inbox.ru', …}
        // comments: (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
        // created_at: "2022-03-11T23:25:10.638Z"
        // image: "http://dummyimage.com/400x200.png/ff4444/ffffff"
        // isPublished: true
        // likes: (38) ['622f9992ae5c40c10c11dfe4', '622b6ffc09b12f80f4c10bbc', '622b6ffc09b12f80f4c10bce', '622b6ffc09b12f80f4c10bdc', '622b6ffc09b12f80f4c10bba', '622b6ffc09b12f80f4c10bc5', '622b6ffc09b12f80f4c10ba2', '622b6ffc09b12f80f4c10bd2', '622b6ffc09b12f80f4c10ba1', '622b6ffc09b12f80f4c10bb5', '624c50e47c57d93142703808', '624f266aae19f546dc083a51', '622b6ffc09b12f80f4c10bbe', '622b6ffc09b12f80f4c10bc3', '6254511f104f3e83968338f6', '626029130cdd7d3fd52f85bb', '626031680cdd7d3fd52f85c6', '626057120cdd7d3fd52f85dd', '626191780cdd7d3fd52f8644', '622b6ffc09b12f80f4c10bc4', '625bec780cdd7d3fd52f83f4', '625828040cdd7d3fd52f82b9', '622b6ffc09b12f80f4c10bcd', '622b6ffc09b12f80f4c10ba7', '624b1d13392d360b78ab2398', '626253300cdd7d3fd52f868b', '6263b4ba438a77ca8f287709', '622b6ffc09b12f80f4c10ba6', '6255a5f5947c7292d8c2050a', '6251adb26ef63c5ef07fc626', '62584a880cdd7d3fd52f82cd', '625870360cdd7d3fd52f82ec', '622bd81b06c7d323b8ae4614', '625e01360cdd7d3fd52f8508', '622b6ffc09b12f80f4c10bb7', '625e790a0cdd7d3fd52f850f', '62555b3f104f3e8396833940', '622b6ffc09b12f80f4c10bc0']
        // tags: ['peace']
        // text: "Occlusion of Transverse Colon with Extraluminal Device, Percutaneous Endoscopic Approach"
        // title: "Float"
        // updated_at: "2022-04-26T14:36:22.076Z"
        // __v: 0
        // _id: "622bda5606c7d323b8ae4616"