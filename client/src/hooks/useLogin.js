import { login } from "../api/authAPI"

export const useLogin = () => {

    const handleLogin = async (email, password) => {
            const result = await login(email, password);
            console.log(result);

    }

    return handleLogin;
}