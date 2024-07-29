import styles from './PostBook.module.css'

export default function PostBook() {
    return (
        <>
            <section className={styles.postContainer} id="post">
                <form>
                    <h2>Post book</h2>
                    <label htmlFor="title">Title</label>
                    <input name="title" type="text" placeholder="The Little Prince" spellcheck="false" />
                    <label htmlFor="author">Author</label>
                    <input name="author" type="text" placeholder="Antoine de Saint-Exupéry" spellcheck="false" />
                    <label htmlFor="genre">Genre</label>
                    <input name="genre" type="text" placeholder="novella" spellcheck="false" />
                    <textarea name="post-area" spellcheck="false"></textarea>
                    <input type="button" value="Post" />
                </form>
            </section>
        </>
    )
}