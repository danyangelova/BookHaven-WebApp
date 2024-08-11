import { useEffect, useState } from "react";
import commentsAPI from "../api/commentsAPI";


export function useCreateComment() {
    const handleCreate = (bookId, comment) => {

        return commentsAPI.createComment(bookId, comment)
    }

    return handleCreate;
}



export function useGetAllComments(bookId) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const result = await commentsAPI.getAllComments(bookId);
                if (result && Array.isArray(result)) {
                    setComments(result);
                } else {
                    console.error('Unexpected result format:', result);
                }
            } catch (error) {
                console.error('Failed to fetch comments:', error);
            }
        })();
    }, [bookId]);

    return [comments, setComments];
}
