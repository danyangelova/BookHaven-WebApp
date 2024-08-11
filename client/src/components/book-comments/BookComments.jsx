import { useAuthContext } from '../../contexts/AuthContext';
import { useParams } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useCreateComment, useGetAllComments } from '../../hooks/useComments';
import styles from '../book-item-details/BookItemDetails.module.css';



export default function BookComments() {

    const { bookId } = useParams();
    const { isAuthenticated } = useAuthContext();
    const createComment = useCreateComment();
    const [comments, setComments] = useGetAllComments(bookId)

    const { values, handleInputChange, handleSubmit } =
        useForm({ comment: '' }, async ({ comment }) => {
            try {
                const newComment = await createComment(bookId, comment);
                setComments(prevComments => prevComments.concat(newComment));
            } catch (err) {
                console.error(err);
            }
        });


    return (
        <>
        <div className={styles.commentsContainer}>
                    <h2>Comments</h2>
                    <div className={styles.comments}>
                        {comments?.map(comment => (
                            <div key={comment._id} className={styles.comment}>
                                <p>User: {comment.text}</p>
                            </div>
                        ))}
                        {comments && comments.length === 0 && <p className={styles.noComment}>No comments.</p>}
                    </div>
                </div>


                {isAuthenticated &&
                    <div className={styles.addComments}>
                        <form className={styles.commentsForm} onSubmit={handleSubmit}>
                            <label>Add new comment</label>
                            <textarea
                                name="comment"
                                placeholder="Type....."
                                value={values.comment}
                                onChange={handleInputChange}
                            ></textarea>
                            <input
                                type="submit"
                                value="Add Comment"
                                onChange={handleInputChange}
                            />
                        </form>
                    </div>
                }
        </>
    )
}