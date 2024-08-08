import { AuthContext } from "../contexts/AuthContext"

import { useContext } from "react"

import { register, login } from "../api/authAPI";



export const useLogin = () => {
    const { changeAuthState } = useContext(AuthContext);

    const handleLogin = async (email, password) => {
        const result = await login(email, password);
        const { password: _, ...authState } = result;

        changeAuthState(authState)

        return result;
    }

    return handleLogin;
}



export const useRegister = () => {
    const { changeAuthState } = useContext(AuthContext);

    const handleRegister = async (email, password) => {
        const result = await register(email, password)
        const { password: _, ...authState } = result;

        changeAuthState(authState)

        return result;
    }

    return handleRegister;
}