import { Navigate } from 'react-router-dom'
import { useAuthContext } from '../../contexts/AuthContext';
import { useEffect } from 'react';

export default function Logout() {

    const { logout } = useAuthContext();

    useEffect(() => {
        logout();
    }, [logout]);

    return (
        <>
            <Navigate to="/" />
        </>
    )
}