import { AuthContext } from "../contexts/AuthContext"

import { useContext } from "react"

import { register } from "../api/authAPI";


export const useRegister = () => {

    const { changeAuthState } = useContext(AuthContext);

    const handleRegister = async (email, password) => {
        try {
            const result = await register(email, password)
            changeAuthState(result)

            return result;

        } catch (err) {
            console.error('Registration failed:', err);
            throw err;
        }
    }

    return handleRegister;
}