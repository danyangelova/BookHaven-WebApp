import styles from '../AllBooks.module.css';

export default function AllBooksList({ book }) {
    return (
        <>
            <div className={styles.bookItem}>
                <img src={book.imageUrl} alt={`${book.title} Cover`} />
                <div className={styles.bookInfo}>
                    <h2>{book.title}</h2>
                    <p>{book.author}</p>
                    <button>Details</button>
                </div>
            </div>
        </>
    );
}
