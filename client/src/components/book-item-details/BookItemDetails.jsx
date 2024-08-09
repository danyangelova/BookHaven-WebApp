
import { useParams } from 'react-router-dom';
import styles from './BookItemDetails.module.css';
import Spinner from '../spinner/Spinner';
import { useFetchBook } from '../../hooks/useFetchBooks';

export default function BookItemDetails() {
    const { bookId } = useParams();

    const { book, isFetching } = useFetchBook(bookId);

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
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                <div className={styles.commentsContainer}>
                    <h2>Comments</h2>
                    <div className={styles.comments}>
                        <div className={styles.comment}>
                            <p>User: I like this book</p>
                        </div>
                        <div className={styles.comment}>
                            <p>User: Amaziiiing</p>
                        </div>
                        <div className={styles.comment}>
                            <p>User: Amaziiiing</p>
                        </div>
                        {/* <p className={styles.noComment}>No comments.</p> */}
                    </div>
                </div>

                <div className={styles.addComments}>
                    <form className={styles.commentsForm}>
                    <label>Add new comment</label>
                        <textarea name="comment" placeholder="Type....."></textarea>
                        <input className="btn submit" type="submit" value="Add Comment" />
                    </form>
                </div>



            </section >
        </>
    );
}
