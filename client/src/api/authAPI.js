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


export const logout = async () => {
    try {
        await get(`${baseURL}/logout`);
        // console.log('Successfully logged out from server.');

    } catch (err) {
        console.error('Logout error:', err);
        throw err;
    }
}

export default {
    login,
    register,
    logout
}
