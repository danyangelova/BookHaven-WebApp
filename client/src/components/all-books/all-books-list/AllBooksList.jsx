import styles from '../AllBooks.module.css'

export default function AllBooksList() {
    return (
        <>
            <div className={styles.bookItem}>
                <img src="book-covers/A Dark and Hollow Star by Ashley Shuttleworth.jpg" alt="Book Cover" />
                <div className={styles.bookInfo}>
                    <h2>A Dark and Hollow Star</h2>
                    <p>Ashley Shuttleworth</p>
                    <button>Details</button>
                </div>
            </div>
        </>
    )
}