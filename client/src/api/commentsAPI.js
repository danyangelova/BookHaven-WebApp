import requester from "./requester";

const baseURL = 'http://localhost:3030/data/comments';




const createComment = (bookId, text) => {
    const result =  requester.post(`${baseURL}`, {bookId, text});

    return result;
}


const getAllComments = (bookId) => {
    const params = new URLSearchParams({
        where: `bookId="${bookId}"`,
    })

    const result = requester.get(`${baseURL}?${params.toString()}`);
    return result;
}




const commentsAPI = {
    createComment,
    getAllComments
}

export default commentsAPI;