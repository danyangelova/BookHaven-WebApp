
import AllBooksList from './all-books-list/AllBooksList'
import styles from './AllBooks.module.css'
import Spinner from '../spinner/Spinner.jsx';
import { useFetchBooks } from '../../hooks/useFetchBooks.js';

import { filterUniqueBooks } from '../../utils/filterUniqueBooks.js';

export default function AllBooks() {


    const books = useFetchBooks();
    const uniqueBooks = filterUniqueBooks(books);

    return (

        <>
            <section className={styles.allBooks} id="all-books" />
            <h1>All books</h1>

            <div className={styles.catalog}>
                {books.length > 0 ? (
                    uniqueBooks.map(book => (
                        <AllBooksList key={book._id} {...book} />
                    ))
                ) : (
                    <Spinner />
                )}
            </div>

        </>
    )
}