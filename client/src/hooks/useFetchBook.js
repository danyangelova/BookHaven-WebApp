import { useEffect, useState } from "react";
import booksAPI from "../api/booksAPI";

export function useFetchBook(bookId) {
    const [book, setBook] = useState({});
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {

        (async () => {
            if(bookId) {
                setIsFetching(true)
                const result = await booksAPI.getOneBook(bookId)

                setBook(result);
                setIsFetching(false)
            }
        })()
    }, [bookId])

    return { book, isFetching };
}