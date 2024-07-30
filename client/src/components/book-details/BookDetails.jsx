import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './BookDetails.module.css';
import { getOne } from '../../api/booksAPI';

export default function BookDetails() {
    const { bookId } = useParams(); //izvlichame bookId ot url/a
    const [book, setBook] = useState({});

    useEffect(() => {
        (async () => {
            if (bookId) { //
                const result = await getOne(bookId);
                setBook(result);
            }
        })();
    }, [bookId]); //dobavqme bookId kato zavisimost

    const { title, author, genre, imageUrl, description } = book;

    return (
        <>
            <section id="details">
                <h1 className={styles.heading}>Book Details</h1>
                <div className={styles.bookContainer}>
                    {imageUrl && <img src={imageUrl} alt={`${title} Cover`} />}
                    <div className={styles.bookInfo}>
                        <h1>{title}</h1>
                        <p>{author}</p>
                        <p>{genre}</p>
                        <p>{description}</p>
                    </div>
                </div>
            </section>
        </>
    );
}
