import { AuthContext } from "../contexts/AuthContext";

import { useContext } from "react";

import authAPI from "../api/authAPI"



export const useLogin = () => {
    const { changeAuthState } = useContext(AuthContext);

    const handleLogin = async (email, password) => {
        try {
            const result = await authAPI.login(email, password);
            const { password: _, ...authState } = result;

            changeAuthState(authState)

            return result;

        } catch (err) {
            console.error('Login failed:', err);
            throw err;
        }
    }

    return handleLogin;

}