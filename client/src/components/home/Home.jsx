import { useEffect, useState } from 'react'
import LastBooks from '../last-books/LastBooks'
import styles from './Home.module.css'

import Spinner from '../spinner/Spinner';
import { getAllBooks } from '../../api/booksAPI';

export default function Home() {
    const [latestBooks, setLatestGames] = useState([]);

    useEffect(() => {
        (async () => {
           const result = await getAllBooks();

           setLatestGames(result.reverse().slice(0, 4));
        })()
    }, [])
    return (
        <>
            <section id="home">
                <div className={styles.welcomeMessage}>
                    <h1>Welcome to our page</h1>
                    <img className={styles.welcomeImg} src="welcome-img.png" />
                </div>
                <h1>Last added books</h1>



                <div className={styles.catalog}>
                    
                    {/* overfetching */}
                    {latestBooks.length > 0
                        ? latestBooks.map(book => <LastBooks key={book._id} {...book} />)
                        : <Spinner />
                    }

                </div>
                
            </section>
        </>
    )
}