import { get, post, put, del } from './requester.js';

const baseURL = 'http://localhost:3030/users';

export const login = async (email, password) => {
    const authData = await post(`${baseURL}/login`, { email, password })

    return authData;
}