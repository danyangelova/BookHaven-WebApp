import LastBooks from '../last-books/LastBooks'
import styles from './Home.module.css'

export default function Home() {
    return (
        <>
            <section id="home">
                <div className={styles.welcomeMessage}>
                    <h1>Welcome to our page</h1>
                    <img className={styles.welcomeImg} src="welcome-img.png" />
                </div>
                <h1>Last added books</h1>



                <div className={styles.catalog}>

                    <LastBooks />
                    <LastBooks />
                    <LastBooks />
                    <LastBooks />

                </div>

                {/* <!-- No books message --> */}
                <p className={styles.noBooks}>No books yet</p>
            </section>
        </>
    )
}