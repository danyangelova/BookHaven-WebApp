import { get, post, put, del } from './requester.js';

const baseURL = 'http://localhost:3030/jsonstore/books';

//getAllBooks
export const getAllBooks = async () => {

    const result = await get(baseURL);
    const books = Object.values(result);

    return books;
}

//getOneBook
export const getOneBook = (bookId) => get(`${baseURL}/${bookId}`)

export default {
    getAllBooks,
    getOneBook
}