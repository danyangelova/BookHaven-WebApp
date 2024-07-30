import { Link } from 'react-router-dom'

import styles from '../home/Home.module.css'

export default function LastBooks({
    _id,
    imageUrl,
    title,
    genre,
}) {
    return (
        <>
            <div className={styles.bookItem}>
                <img src={imageUrl} alt="Book Cover" />
                <div className={styles.bookInfo}>
                    <h2>{title}</h2>
                    <p>{genre}</p>
                    <Link to={`books/${_id}/details`} className={styles.btn}>Details</Link>
                </div>
            </div>
        </>
    )
}