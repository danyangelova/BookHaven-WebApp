import { get, post, put, del } from './requester.js';

const baseURL = 'http://localhost:3030/users';

//ochakvane da gi poluchim tiq danni, za da moje da poluchim requesta za login
export const login = async (email, password) => {
    const authData = await post(`${baseURL}/login`, { email, password })

    return authData;
}