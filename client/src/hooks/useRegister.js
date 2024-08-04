import { AuthContext } from "../contexts/AuthContext"

import { useContext } from "react"

import authAPI from "../api/authAPI";



export const useRegister = () => {
    const { changeAuthState } = useContext(AuthContext);

    const handleRegister = async (email, password) => {

        const result = await authAPI.register(email, password)
        const { password: _, ...authState } = result;

        changeAuthState(authState)

        return result;

    }
    return handleRegister;

}