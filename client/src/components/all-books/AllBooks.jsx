import AllBooksList from './all-books-list/AllBooksList'
import styles from './AllBooks.module.css'

export default function AllBooks() {
    return (
        <>
            <section className={styles.allBooks} id="all-books" />
            <h1>All books</h1>

            <div className={styles.catalog}>


                <AllBooksList />
                <AllBooksList />
                <AllBooksList />
                <AllBooksList />
                <AllBooksList />
                

            </div>
        </>
    )
}