import { AuthContextProvider } from "./contexts/AuthContext"

import { Routes, Route } from "react-router-dom"

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import AllBooks from "./components/all-books/AllBooks"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import PostBook from "./components/post-book/PostBook"
import EditBook from "./components/edit-book/EditBook"
import BookItemDetails from "./components/book-item-details/BookItemDetails"
import { PrivateRoute } from "./components/private-route/PrivateRoute"
import Logout from "./components/logout/Logout"
import UserBooks from "./components/user-books/UserBooks"
import NotFound from "./components/not-found/NotFound"
import Footer from "./components/footer/Footer"



function App() {


  return (
    <AuthContextProvider>

      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<AllBooks />} />
          <Route path="/books/:bookId/details" element={<BookItemDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />

          <Route element={<PrivateRoute />} >
            <Route path='/post' element={<PostBook />} />
            <Route path='/books/:bookId/edit' element={<EditBook />} />
            <Route path='/my-books' element={<UserBooks />} />
          </Route>
        </Routes>
      </main>
      <Footer />

    </AuthContextProvider>
  )
}

export default App
