import { useCreateBook } from '../../hooks/useFetchBooks';
import { useForm } from '../../hooks/useForm'
import { useNavigate } from 'react-router-dom'
import styles from './PostBook.module.css'
import { createBook } from '../../api/booksAPI';


export default function PostBook() {
    const navigate = useNavigate()
    const createBook = useCreateBook()

    const { values, handleInputChange, handleSubmit } =
        useForm({
            title: '', author: '', genre: '', img: '', bookText: ''
        },
            async (values) => {
                try {
                    const { _id: bookId } = await createBook(values);
                    navigate(`/books/${bookId}/details`)

                } catch (err) {
                    console.error(err.message);
                }
            })

    return (
        <>
            <section className={styles.postContainer} id="post">
                <form style={{ padding: "35px 57px" }} onSubmit={handleSubmit} >
                    <h2>Post book</h2>
                    <label htmlFor="title">Title</label>
                    <input name="title" type="text" value={values.title} onChange={handleInputChange} placeholder="The Little Prince" spellCheck="false" />
                    <label htmlFor="author">Author</label>
                    <input name="author" type="text" value={values.author} onChange={handleInputChange} placeholder="Antoine de Saint-Exupéry" spellCheck="false" />
                    <label htmlFor="genre">Genre</label>
                    <input name="genre" type="text" value={values.genre} onChange={handleInputChange} placeholder="novella" spellCheck="false" />
                    <label htmlFor="img">Image</label>
                    <input name="img" type="text" value={values.img} onChange={handleInputChange} />
                    <textarea name="bookText" value={values.bookText} onChange={handleInputChange} spellCheck="false"></textarea>
                    <input type="submit" value="Post" />
                </form>
            </section>
        </>
    )
}