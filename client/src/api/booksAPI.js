import { get, post, put, del } from './requester.js';

const baseURL = 'http://localhost:3030/jsonstore/books';

export const getAllBooks = async () => {

    const result = await get(baseURL);
    const books = Object.values(result);

    return books;
}
