import { get, post, put, del } from './requester.js';

//http://localhost:3030/users

export const login = async (email, password) => {
    try {
        return post('http://localhost:3030/users/login', { email, password });
    } catch (err) {
        console.log('Login failed:', err);
        throw err;
    }
}

export const register = async (email, password) => {
    try {
        return post('http://localhost:3030/users/register', { email, password });
    } catch (err) {
        console.log('Registration failed:', err);
        throw err;
    }
} 


export default {
    login,
    register
}