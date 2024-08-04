import { AuthContext } from "../contexts/AuthContext";

import { useContext } from "react";

import authAPI from "../api/authAPI"



export const useLogin = () => {
    const { changeAuthState } = useContext(AuthContext);

    const handleLogin = async (email, password) => {
        const result = await authAPI.login(email, password);
        const { password: _, ...authState } = result;

        changeAuthState(authState)

        return result;

    }

    return handleLogin;

}