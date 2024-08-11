import { useNavigate, useParams } from 'react-router-dom'
import { useFetchBook } from '../../hooks/useFetchBooks';
import { useForm } from '../../hooks/useForm'
import styles from './EditBook.module.css'
import { useEffect } from 'react';
import { editBook } from '../../api/booksAPI';




export default function EditBook() {

    const { bookId } = useParams();
    const [book, isFetching] = useFetchBook(bookId);
    const navigate = useNavigate();

    const { values, handleInputChange, handleSubmit, setValues } = useForm({
        title: '', 
        author: '', 
        genre: '', 
        imageUrl: '', 
        description: ''
    }, async (values) => {
        await editBook(bookId, values);
        navigate(`/books/${bookId}/details`)
        
    });


    useEffect(() => {
        if (book && !isFetching) {
            setValues(book);
        }
    }, [book, isFetching, setValues]);


    if (isFetching) {
        return <div>Loading...</div>;
    }



    return (
        <>
            <section className={styles.editContainer} id="edit">
                <form onSubmit={handleSubmit}>
                    <h2>Edit book</h2>
                    <label htmlFor="title">Title</label>
                    <input
                        name="title"
                        type="text"
                        spellCheck="false"
                        value={values.title || ''}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="author">Author</label>
                    <input
                        name="author"
                        type="text"
                        spellCheck="false"
                        value={values.author || ''}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="genre">Genre</label>
                    <input
                        name="genre"
                        type="text"
                        spellCheck="false"
                        value={values.genre || ''}
                        onChange={handleInputChange}
                    />
                    <input
                        name="imageUrl"
                        type="text"
                        value={values.imageUrl || ''}
                        onChange={handleInputChange}
                    />
                    <textarea
                        name="description"
                        spellCheck="false"
                        value={values.description || ''}
                        onChange={handleInputChange}>
                    </textarea>
                    <input type="submit" value="Edit" />

                </form>
            </section>
        </>
    )
}