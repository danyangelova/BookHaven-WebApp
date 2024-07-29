import styles from './BookDetails.module.css'

export default function BookDetails() {
    return (
        <>
            <section id="details">

                <h1 className={styles.heading}>Book Details</h1>

                <div className={styles.bookContainer}>
                    <img src="book-covers/A Dark and Hollow Star by Ashley Shuttleworth.jpg" />
                    <div className={styles.bookInfo}>
                        <h1>Book Title</h1>
                        <p>Author: </p>
                        <p>Genre: Fiction</p>
                        <p>Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate sed, commodi, eum
                            libero
                            quae vero quo suscipit fugiat consequatur iste quidem quos consequuntur atque. Dolorum quasi magni
                            nulla
                            repudiandae enim!
                            Accusamus voluptas rem obcaecati nisi placeat incidunt eius assumenda sed quia quidem consequatur
                            animi
                            perspiciatis aperiam eligendi quisquam deserunt voluptatum vitae sapiente ipsa praesentium,
                            excepturi
                            repellat nesciunt. Quis, sapiente ut.
                            Soluta, fugiat! Neque maxime id ea similique quas perferendis, provident itaque enim iusto quis
                            illum!
                            Modi
                            labore sapiente nisi magnam perspiciatis hic dicta sunt nemo voluptas, aut officia fuga architecto!.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}