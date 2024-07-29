import { Link } from "react-router-dom"

export default function Header() {
    return (
        <>
            <header>
                <Link to="/">
                    <div className="logo">BookHaven</div>
                </Link>
                <nav>
                    <Link to="/allbooks">All books</Link>
                    <Link to="/post">Post book</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/logout">Logout</Link>
                    <Link to="/register">Register</Link>
                </nav>
            </header>
        </>
    )
}