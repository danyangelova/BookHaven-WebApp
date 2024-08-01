import { Routes, Route } from "react-router-dom"

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import AllBooks from "./components/all-books/AllBooks"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import PostBook from "./components/post-book/PostBook"
import EditBook from "./components/edit-book/EditBook"
import Spinner from "./components/spinner/Spinner"
import BookItemDetails from "./components/book-item-details/BookItemDetails"

function App() {


  return (
    <>
      <Header />

      <main>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<AllBooks />} />
          <Route path="/books/:bookId/details" element={<BookItemDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/post" element={<PostBook />} />
          <Route path="/edit" element={<EditBook />} />
        </Routes>
      </main>
    </>
  )
}

export default App
