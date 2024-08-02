import { useContext } from "react"
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"

export default function Header() {
    const { isAuthenticated, email } = useContext(AuthContext)
    return (
        <>
            <header>
                <Link to="/">
                    <div className="logo">BookHaven</div>
                </Link>
                <nav>
                    {isAuthenticated &&
                        <>
                            <p>{email}</p>
                        </>}
                    <NavLink
                        to="/books"
                        style={({ isActive }) => isActive ? { color: "#652c5c", fontWeight: "bold" } : {}}
                    >All books
                    </NavLink>
                    {isAuthenticated
                        ?
                        <>
                            <NavLink
                                to="/post"
                                style={({ isActive }) => isActive ? { color: "#652c5c", fontWeight: "bold" } : {}}
                            >Post book
                            </NavLink>
                            <NavLink
                                to="/logout"
                                style={({ isActive }) => isActive ? { color: "#652c5c", fontWeight: "bold" } : {}}
                            >Logout
                            </NavLink>
                        </>
                        : (
                            <>
                                <NavLink
                                    to="/login"
                                    style={({ isActive }) => isActive ? { color: "#652c5c", fontWeight: "bold" } : {}}
                                >Login
                                </NavLink>
                                <NavLink
                                    to="/register"
                                    style={({ isActive }) => isActive ? { color: "#652c5c", fontWeight: "bold" } : {}}
                                >Register
                                </NavLink>
                            </>
                        )
                    }
                </nav>
            </header>
        </>
    )
}