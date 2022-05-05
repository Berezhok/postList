import { config } from './config';



const oneResponce = (res) => {
        return res.ok ?  res.json() : Promise.reject(`ошибка ${res.status}`)
    }



class Api {
    constructor({ url, token }) {
        this._url = url;
        this._token = token;
    }

    getPosts(postId) {
        const oneOrAllPosts = postId ? `${this._url}/posts/${postId}`: `${this._url}/posts`;
        return fetch(oneOrAllPosts ,{
            headers: {
                authorization: `Bearer ${this._token}`
            }
        }).then(oneResponce)
    }

    getUserInfo(){
        return fetch(`${this._url}/users/me`, {
            headers: {
                authorization: `Bearer ${this._token}`
            }
        })
    }

    getAvatar(){
        return fetch(`${this._url}/users/me/avatar`, {
            method: "PATCH",
            headers: {
                authorization: `Bearer ${this._token}`
            },
            body:{
                avatar: "https://i.ytimg.com/vi/PbbNMgPVfqs/maxresdefault.jpg"
            }
        })
    }


    addLike(postId){
        return fetch(`${this._url}/posts/likes/${postId}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${this._token}`,
            },
        }).then(oneResponce)
    }

    deleteLike(postId){
        return fetch(`${this._url}/posts/likes/${postId}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${this._token}`,
            },
        }).then(oneResponce)
    }

    deletePost(postId){
        return fetch(`${this._url}/posts/${postId}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${this._token}`,
            },
        }).then(oneResponce)
    }

    getComments(postId){
        return fetch(`${this._url}/posts/comments/${postId}`, {
            headers: {
                authorization: `Bearer ${this._token}`,
            },
        }).then(oneResponce)
    }

    addPost(post){
        return fetch(`${this._url}/posts`,{
            method: "POST",
            headers: {
                authorization: `Bearer ${this._token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post)
        }).then(oneResponce)
    }

}
export default new Api(config);
