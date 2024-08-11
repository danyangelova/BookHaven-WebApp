
import { useParams } from 'react-router-dom';
import styles from './BookItemDetails.module.css';
import Spinner from '../spinner/Spinner';
import { useFetchBook } from '../../hooks/useFetchBooks';
import BookComments from '../book-comments/BookComments';


export default function BookItemDetails() {
    const { bookId } = useParams();
    const [book, isFetching] = useFetchBook(bookId);
    

    const { title, author, genre, imageUrl, description } = book;

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
                                <div className={styles.buttons} >
                                    <button className={`${styles.btn} ${styles.edit}`}>Edit</button>
                                    <button className={styles.btn}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                <BookComments/>

            </section >
        </>
    );
}
