import { useCreateBook } from '../../hooks/useFetchBooks';
import { useForm } from '../../hooks/useForm'
import { useNavigate } from 'react-router-dom'
import styles from './PostBook.module.css'


export default function PostBook() {
    const navigate = useNavigate()
    const createBook = useCreateBook()

    const { values, handleInputChange, handleSubmit } =
        useForm({
            title: '', author: '', genre: '', imageUrl: '', description: ''
        },
            async (values) => {
                try {
                    const { _id: bookId } = await createBook(values);
                    navigate(`/books/${bookId}/details`)
                } catch (err) {
                    console.error('Error creating book:', err.message)
                }
            }
        );

        
    return (
        <section className={styles.postContainer} id="post">
            <form style={{ padding: "35px 57px" }} onSubmit={handleSubmit}>
                <h2>Post book</h2>
                <label htmlFor="title">Title</label>
                <input
                    name="title"
                    type="text"
                    value={values.title}
                    onChange={handleInputChange}
                    placeholder="The Little Prince"
                    spellCheck="false"
                />
                <label htmlFor="author">Author</label>
                <input
                    name="author"
                    type="text"
                    value={values.author}
                    onChange={handleInputChange}
                    placeholder="Antoine de Saint-Exupéry"
                    spellCheck="false"
                />
                <label htmlFor="genre">Genre</label>
                <input
                    name="genre"
                    type="text"
                    value={values.genre}
                    onChange={handleInputChange}
                    placeholder="novella"
                    spellCheck="false"
                />
                <label htmlFor="imageUrl">Image</label>
                <input
                    name="imageUrl"
                    type="text"
                    value={values.imageUrl}
                    onChange={handleInputChange}
                />
                <textarea
                    name="description"
                    value={values.description}
                    onChange={handleInputChange}
                    spellCheck="false">
                </textarea>
                <input type="submit" value="Post" />
            </form>
        </section>
    );
}
