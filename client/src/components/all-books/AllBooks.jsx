import { useEffect, useState } from 'react'
import AllBooksList from './all-books-list/AllBooksList'
import styles from './AllBooks.module.css'

export default function AllBooks() {

    const [books, setBooks] = useState({});

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/books')
            .then(response => response.json())
            .then(data => {
                setBooks(data);
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