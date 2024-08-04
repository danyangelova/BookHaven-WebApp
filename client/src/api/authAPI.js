import { get, post, put, del } from './requester.js';

//http://localhost:3030/users

export const login = async (email, password) => {
    return await post('http://localhost:3030/users/login', { email, password });

}

export const register = async (email, password) => {
    return await post('http://localhost:3030/users/register', { email, password });

}


export default {
    login,
    register
}