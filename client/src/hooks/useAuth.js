import { useAuthContext } from "../contexts/AuthContext"
import { register, login } from "../api/authAPI";



export const useLogin = () => {
    const { changeAuthState } = useAuthContext();

    const handleLogin = async (email, password) => {
        try {
            localStorage.removeItem('accessToken');
            const result = await login(email, password);
            const authData = { ...result };
            delete authData.password;

            localStorage.setItem('accessToken', authData.accessToken);
            changeAuthState(authData);
            return authData;

        } catch (err) {
            console.error('Login error:', err);
            throw err;
        }
    }

    return handleLogin;
}



export const useRegister = () => {
    const { changeAuthState } = useAuthContext();

    const handleRegister = async (email, password) => {
        try {
            localStorage.removeItem('accessToken');
            const result = await register(email, password);
            const authData = { ...result };
            delete authData.password;

            localStorage.setItem('accessToken', authData.accessToken);
            changeAuthState(authData);
            return authData;

        } catch (err) {
            console.error('Register error:', err);
            throw err;
        }
    }

    return handleRegister;
}


