

import styles from './AllBooks.module.css'
import Spinner from '../spinner/Spinner.jsx';
import { useFetchBooks } from '../../hooks/useFetchBooks.js';

import { filterUniqueBooks } from '../../utils/filterUniqueBooks.js';
import AllBooksItem from './all-books-item/AllBooksItem.jsx';
import { useAuthContext } from '../../contexts/AuthContext.jsx';

export default function AllBooks() {


    const books = useFetchBooks();
    const { userId } = useAuthContext();
    const uniqueBooks = filterUniqueBooks(books);
    // console.log(books);
    

    return (

        <>
            <section className={styles.allBooks} id="all-books" />
            <h1>All books</h1>

            <div className={styles.catalog}>
                {books.length > 0 ? (
                    uniqueBooks.map(book => (
                        <AllBooksItem
                            key={book._id}
                            {...book}
                            currentUserId={userId}
                            bookOwnerId={book._ownerId}
                        />
                    ))
                ) : (
                    <Spinner />
                )}
            </div>

        </>
    )
}