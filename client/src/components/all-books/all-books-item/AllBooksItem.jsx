import { Link } from 'react-router-dom'

import styles from '../AllBooks.module.css';

export default function AllBooksItem({
    _id,
    title,
    author,
    imageUrl}) {
        
    return (
        <>
            <div className={styles.bookItem}>
                <img src={imageUrl} alt={`${title} Cover`} />
                <div className={styles.bookInfo}>
                    <h2>{title}</h2>
                    <p>{author}</p>
                    <Link to={`/books/${_id}/details`} className={styles.btn}>Details</Link>
                </div>
            </div>
        </>
    );
}
