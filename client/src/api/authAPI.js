import { get, post, put, del } from './requester.js';

let baseURL = 'http://localhost:3030/users';

export const login = async (email, password) => {
    const response = await post(`${baseURL}/login`, { email, password });

    return response;
}

export const register = async (email, password) => {
    const response = await post(`${baseURL}/register`, { email, password });

    return response;
}

export default {
    login,
    register
}
