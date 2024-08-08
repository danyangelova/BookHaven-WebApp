import { AuthContext } from "./contexts/AuthContext"

import { useState } from "react"

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



function App() {
  const [authState, setAuthState] = useState({});

  const changeAuthState = (state) => {
    localStorage.setItem('accessToken', state.accessToken);

    setAuthState(state);
  }


  const contextData = {
    userId: authState._id,
    email: authState.email,
    accessToken: authState.accessToken,
    isAuthenticated: !!authState.email,
    changeAuthState
  }

  return (
    <AuthContext.Provider value={contextData}>

      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<AllBooks />} />
          <Route path="/books/:bookId/details" element={<BookItemDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Home />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/post" element={<PostBook />} /> */}
          <Route path="/edit" element={<EditBook />} />

          <Route path="/post" element={
            <PrivateRoute>
              <PostBook />
            </PrivateRoute>
          } />

        </Routes>
      </main>

    </AuthContext.Provider>
  )
}

export default App
