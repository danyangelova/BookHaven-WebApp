import { useEffect, useState } from "react";

import { createBook, getAllBooks, getBookById, deleteBook, getBooksByOwner } from "../api/booksAPI";
import { useAuthContext } from "../contexts/AuthContext";



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

    return [book, isFetching];
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




export function useFetchUserBooks() {
    const { userId } = useAuthContext();
    const [userBooks, setUserBooks] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                if (userId) {
                    const result = await getBooksByOwner(userId);
                    setUserBooks(result);
                }
            } catch (error) {
                console.error('Error fetching user books:', error);
            }
        })();
    }, [userId]);
    // console.log(userBooks);

    return userBooks;
}
