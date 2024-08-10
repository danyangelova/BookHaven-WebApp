
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { useAuthContext } from "../../contexts/AuthContext"

 
export default function Header() {
    const { isAuthenticated, email, logout } = useAuthContext()
 
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
                            <button className="logout"
                                onClick={() => logout()}
                            // style={({ isActive }) => isActive ? { color: "#652c5c", fontWeight: "bold" } : {}}
                            >Logout
                            </button>
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