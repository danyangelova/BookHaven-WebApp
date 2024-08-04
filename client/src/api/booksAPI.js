import { get, post, put, del } from './requester.js';

//http://localhost:3030/data/books


export const getAllBooks = async () => {
    const result = await get('http://localhost:3030/jsonstore/books');
    const books = Object.values(result);
    
    return books;
}



export const getOneBook = async (bookId) => {
    const result = await get(`http://localhost:3030/jsonstore/books/${bookId}`);
    
    return result;
}



export const createBook = async (bookData) => {
    const result = await post(`http://localhost:3030/jsonstore/books`, bookData);
    // console.log(result);
    
    return result;
}



export default {
    getAllBooks,
    getOneBook,
    createBook
}