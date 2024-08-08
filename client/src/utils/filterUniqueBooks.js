export function filterUniqueBooks(books) {
    const uniqueBooks = books.reduce((acc, currentBook) => {
        const x = acc.find(book => book.title === currentBook.title && book.author === currentBook.author);
        if (!x) {
            return acc.concat([currentBook]);
        } else {
            return acc;
        }
    }, []);

    return uniqueBooks;
}
