import { get, post, put, del } from './requester.js';

const apiURL = 'http://localhost:3030/data/books';



export const getAllBooks = async () => {
    const result = await get(apiURL);
    const books = Object.values(result);
    
    return books;
}


export const getBookById = async (bookId) => {
    return await get(`${apiURL}/${bookId}`);
    
}


export const createBook = async (bookData) => {
    return await post(`${apiURL}`, bookData);

}


export const deleteBook = async (bookId) => {
    return await del(`${apiURL}/${bookId}`);

}


export const editBook = async (bookId, bookData) => {
    return await put(`${apiURL}/${bookId}`, bookData);
}