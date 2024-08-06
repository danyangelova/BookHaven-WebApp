import { useEffect, useState } from "react";
import { createBook, getAllBooks, getBookById } from "../api/booksAPI";


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

    return { book, isFetching };
}




export function useCreateBook() {

    const handleBookCreate = (bookData) => {
        return result = createBook(bookData)

    }

    return handleBookCreate;
}
