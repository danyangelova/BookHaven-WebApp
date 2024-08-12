import { Link } from 'react-router-dom'

import styles from '../AllBooks.module.css';

export default function AllBooksItem({
    _id,
    title,
    author,
    imageUrl,
    currentUserId,
    bookOwnerId
}) {

    const isOwner = currentUserId && currentUserId === bookOwnerId;

    return (
        <>
            <div className={styles.bookItem} style={{ border: isOwner ? '2px solid #697fd2' : 'none' }}>
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
