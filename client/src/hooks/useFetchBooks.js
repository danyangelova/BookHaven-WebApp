import { useEffect, useState } from "react";

import { createBook, getAllBooks, getBookById, deleteBook } from "../api/booksAPI";


export function useFetchBooks() {
    
    const [books, setBooks] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const result = await getAllBooks();
                setBooks(result)
            } catch (error) {
                console.error('!!Detailed error:', error);
            }
        })()
    }, [])

    return books;
}



export function useFetchBook(bookId) {
    const [book, setBook] = useState({});
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                if (bookId) {
                    setIsFetching(true);
                    const result = await getBookById(bookId)
                    setBook(result);
                    setIsFetching(false);
                }
            } catch (error) {
                console.error('!!Detailed error:', error);
                setIsFetching(false);
            }
        })();
    }, [bookId]);

    return [ book, isFetching ];
}



export function useCreateBook() {
    const handleBookCreate = async (bookData) => {
        try {
            const result = await createBook(bookData);
            return result;
        } catch (error) {
            throw error;
        }
    }

    return handleBookCreate;
}



export function useDeleteBook() {
    const handleBookDelete = async (bookId) => {
        try {
            const result = await deleteBook(bookId);
            return result;
        } catch (error) {
            throw error;
        }
    }

    return handleBookDelete;
}