import { config } from './config';

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

    // getAvatar(){
    //     return fetch(`${this._url}/users/me/avatar`, {
    //         method: "PATCH",
    //         headers: {
    //             authorization: `Bearer ${this._token}`
    //         },
    //         body:{
    //             avatar: "https://i.ytimg.com/vi/PbbNMgPVfqs/maxresdefault.jpg"
    //           }
    //     })
    // }

}
export default new Api(config);
