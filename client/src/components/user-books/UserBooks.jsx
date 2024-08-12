import { Link } from 'react-router-dom'
import { useFetchUserBooks } from '../../hooks/useFetchBooks.js';
import UserBooksItem from './user-books-item/UserBooksItem.jsx';
import styles from './UserBooks.module.css'


export default function UserBooks() {

    const userBooks = useFetchUserBooks();

    return (
        <>
            <section className={styles.userBooks} id="user-books" >
                <h1 className={styles.heading}>Your books</h1>

                <div className={styles.booksContainer}>
                    {userBooks.length > 0 ? (
                        userBooks.map(userBook => (
                            <UserBooksItem key={userBook._id} {...userBook} />
                        ))
                    ) : (
                        <p>No books added yet.</p>
                    )}

                </div>

            </section>
        </>
    );
};


