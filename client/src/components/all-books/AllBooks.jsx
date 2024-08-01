
import AllBooksList from './all-books-list/AllBooksList'
import styles from './AllBooks.module.css'
import Spinner from '../spinner/Spinner.jsx';
import { useFetchBooks } from '../../hooks/useFetchBooks.js';

export default function AllBooks() {

    
    const books = useFetchBooks();

    return (

        <>
            <section className={styles.allBooks} id="all-books" />
            <h1>All books</h1>

            <div className={styles.catalog}>
                {books.length > 0 ? (
                    books.map(book => (
                        <AllBooksList key={book._id} {...book} />
                    ))
                ) : (
                    <Spinner />
                )}
            </div>

        </>
    )
}