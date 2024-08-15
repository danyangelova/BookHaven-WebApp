# BookHaven-WebApp
## 1. Project Overview
BookHaven is a web application designed for browsing, publishing, and managing books. Users can log in to publish new books, comment on existing ones, and manage their own publications. Non-logged-in users can browse the available books but cannot interact with them beyond viewing.

### Key Features:
* Browsing: All users can browse the catalog of books.
* Publishing: Logged-in users can publish new books.
* Commenting: Logged-in users can comment on books.
* Management: Users can edit or delete books they have published.

## 2. Technologies and Tools

### Frontend:

#### React.js: The main library used for building the user interface, including components, state management, and lifecycle methods
* Context API: Used to create a context for managing user authentication state across the application.
* React Hooks: Specifically, `useState` for managing state, `useEffect` for handling side effects, and `useContext` for accessing context values.

#### React Router: A library for managing client-side routing, allowing navigation between different pages of the application


### Backend:

#### SoftUni Practice Server: A REST service used for educational purposes, providing several key features:
* JSON Store: It supports basic CRUD operations without authentication
* Authentication: Manages user registration, login, and logout functionalities, with token-based authentication.
* Collections: Supports CRUD operations on data collections with user authentication. Only authenticated users can create, update, or delete records, while reading is public.

### Additional Tools:
* Node.js: Used to run the backend server locally.
* NPM (Node Package Manager): For managing project dependencies and scripts.

## 3. Project Architecture
### Directory Structure:
* src/api: Contains the API service configurations.
* src/components: Contains all React components.
* src/context: Manages global state using Context API.
* src/hooks: Custom hooks used in the application.
* src/utils: Utility functions.

### Project Separation:
The project is organized into two main directories:
* client: Contains all the frontend code (react)
* server: Contains the backend code (the softuni practice server)

## 4. Features and Pages
### Main Pages:
* Home Page: Landing page (accessible to all users)
* Catalog: Displays a list of all books (accessible to all users)
* Book Details: Shows detailed information about a selected book (accessible to all users)
* Add Book: Form for adding a new book (available to logged-in users only)
* My Books: Shows all books published by the logged-in user (available to logged-in users only)
* Edit Book: Form for editing an existing book (available to the book owner only)
* Login/Register: Pages for user authentication (available to guests only)
* 404 Page: Error page for non-existent routes (accessible to all users)

### User Permissions:
* Guest Users: Can browse the Home Page and Catalog but cannot add books or comments
* Logged-in Users: Can browse, publish books, and comment on books
* Book Owners: Can edit or delete their own books

## 5. Installation Instructions
### For Client:
1. Navigate to the client directory:
```bash
cd client
```
2. Install dependencies:
```bash
npm install
```
3. Start the client:
```bash
npm run dev
```
### For Server:
1. Open the server in Integrated terminal
2. Start the server:
```bash
node .\server.js
```

## 6. Additional Information
### Empty Collections:
Initially, if the collections (like comments) are empty, the application may throw errors in the console. These errors will be resolved once data is added (when a user logs in or adds a comment).
Example error message:
```bash
ReferenceError: Collection does not exist: comments
```
This issue occurs because the collection is initially empty but will be resolved as soon as data is present.