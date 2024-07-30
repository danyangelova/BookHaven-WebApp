import { useEffect, useState } from 'react'
import AllBooksList from './all-books-list/AllBooksList'
import styles from './AllBooks.module.css'
import * as booksAPI from '../../api/booksAPI.js';

export default function AllBooks() {

    const [books, setBooks] = useState({});

    useEffect(() => {
        booksAPI.getAllBooks()
            .then(result => {
                setBooks(result);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (

        <>
            <section className={styles.allBooks} id="all-books" />
            <h1>All books</h1>

            <div className={styles.catalog}>
                {Object.keys(books).length > 0 ? (
                    Object.keys(books).map(key => (
                        <AllBooksList key={key} book={books[key]} />
                    ))
                ) : (
                    <p>Looding...</p>
                )}
            </div>

        </>
    )
}