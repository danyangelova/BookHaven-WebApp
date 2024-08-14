import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';


export function PrivateRoute() {
    const { isAuthenticated } = useContext(AuthContext);


    return isAuthenticated 
    ? <Outlet />
    : <Navigate to="/login" />
}
