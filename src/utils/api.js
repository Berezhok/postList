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
}
export default new Api(config);
