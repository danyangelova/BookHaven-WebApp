import { AuthContext } from "../contexts/AuthContext";

import { useContext } from "react";

import { login } from "../api/authAPI"


export const useLogin = () => {
    const { changeAuthState } = useContext(AuthContext);

    const handleLogin = async (email, password) => {
        try {
            const result = await login(email, password);
            changeAuthState(result)

            return result;

        } catch (err) {
            console.error('Login failed:', err);
            throw err;
        }

    }

    return handleLogin;
}