import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom';
import styles from './BookItemDetails.module.css';
import Spinner from '../spinner/Spinner';
import { useFetchBook, useDeleteBook } from '../../hooks/useFetchBooks';
import BookComments from '../book-comments/BookComments';
import { useAuthContext } from '../../contexts/AuthContext';


export default function BookItemDetails() {
    const { bookId } = useParams();
    const [book, isFetching] = useFetchBook(bookId);
    const { userId } = useAuthContext();
    const { isAuthenticated } = useAuthContext();
    const navigate = useNavigate();
    const deleteBook = useDeleteBook();

    const { title, author, genre, imageUrl, description } = book;
    const isOwner = userId === book._ownerId;


    const handleDeleteBook = async () => {
        try {
            await deleteBook(bookId);
            navigate('/books');
        } catch (error) {
            console.error('!!Failed to delete the book:', error);
        }
    }
    

    return (
        <>

            <section id="details">
                <h1 className={styles.heading}>Book Details</h1>

                {isFetching ? (
                    <Spinner />
                ) : (
                    <>
                        <div className={styles.bookContainer}>
                            {imageUrl && <img src={imageUrl} alt={`${title} Cover`} />}
                            <div className={styles.bookInfo}>
                                <h1>{title}</h1>
                                <p>{author}</p>
                                <p>{genre}</p>
                                <p>{description}</p>
                                {isOwner && isAuthenticated && (
                                    <div className={styles.buttons} >
                                        <Link  to={`/books/${bookId}/edit`} className={`${styles.btn} ${styles.edit}`}>Edit</Link>
                                        <a className={styles.btn} onClick={handleDeleteBook}
                                        >
                                            Delete
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                )}

                <BookComments />

            </section >
        </>
    );
}
