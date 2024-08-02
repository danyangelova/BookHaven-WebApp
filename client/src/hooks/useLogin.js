import { AuthContext } from "../contexts/AuthContext";

import { useContext } from "react";

import { login } from "../api/authAPI"


export const useLogin = () => {

    const { changeAuthState } = useContext(AuthContext);

    const handleLogin = async (email, password) => {
        const result = await login(email, password);

        changeAuthState(result)
        
        console.log(result);
    }

    return handleLogin;
}