import styles from '../home/Home.module.css'

export default function LastBooks() {
    return (
        <>
            <div className={styles.bookItem}>
                <img src="/book-covers/Rebel Fire by Ann Sei Lin.jpg" alt="Book Cover" />
                <div className={styles.bookInfo}>
                    <h2>Book Title</h2>
                    <p>Genre: Fiction</p>
                    <button>Details</button>
                </div>
            </div>
        </>
    )
}