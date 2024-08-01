import { useEffect, useState } from "react";
import booksAPI from "../api/booksAPI";


export function useFetchBooks() {

    const [books, setBooks] = useState([])

    useEffect(() => {
        (async () => {
            const result = await booksAPI.getAllBooks();

            setBooks(result)
        })()
    }, [])

    return books;
}