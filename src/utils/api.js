import { config } from './config';



const oneResponce = (res) => {
        return res.ok ?  res.json() : Promise.reject(`ошибка ${res.status}`)
    }



class Api {
    constructor({ url, token }) {
        this._url = url;
        this._token = token;
    }

    getPosts() {
        return fetch(`${this._url}/posts`, {
            headers: {
                authorization: `Bearer ${this._token}`
            }
        })
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

}
export default new Api(config);
