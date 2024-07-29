import styles from './EditBook.module.css'

export default function EditBook() {
    return (
        <>
        <section className={styles.editContainer} id="edit">
        <form>
            <h2>Edit book</h2>
            <label htmlFor="title">Title</label>
            <input name="title" type="text" value="Rebel Skies" spellcheck="false" />
            <label htmlFor="author">Author</label>
            <input name="author" type="text" value="Ann Sei Lin" spellcheck="false" />
            <label htmlFor="genre">Genre</label>
            <input name="genre" type="text" value="Fantasy, Adventure" spellcheck="false" />
            <textarea name="post-area" spellcheck="false" >Kurara has never known any other life than being a servant onboard the Midori, a flying ship serving the military elite of the Mikoshiman Empire, a vast realm of floating cities. Kurara also has a secret — she can make folded paper figures come to life with a flick of her finger. But when the Midori is attacked and Kurara's secret turns out to be a power treasured across the empire, a gut-wrenching escape leads her to the gruff Himura, who takes her under his wing. Under Himura's tutelage, and with the grudging support and friendship of his crew, Kurara learns to hunt shikigami — wild paper spirits sought after by the Princess of Mikoshima.
            </textarea>
            <input type="button" value="Edit" />

        </form>
    </section>
        </>
    )
}