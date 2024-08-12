import { Link } from 'react-router-dom'
import styles from '../UserBooks.module.css'

export default function UserBooksItem({
    _id,
    title,
    imageUrl,
}) {
    return (
        <>
            <div className={styles.bookItem}>
                <Link to={`/books/${_id}/details`}>
                    <img src={imageUrl} alt={`${title} Cover`} className={styles.bookImage} />
                </Link>
                <h3>{title}</h3>
            </div>
        </>
    )
}