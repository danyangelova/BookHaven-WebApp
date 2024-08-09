import { createContext, useContext, useState } from "react";
import { logout as apiLogout } from '../api/authAPI';

export const AuthContext = createContext({
  userId: '',
  email: '',
  accessToken: '',
  isAuthenticated: false,
  changeAuthState: () => null
});



export function AuthContextProvider(props) {
  const [authState, setAuthState] = useState({});

  const changeAuthState = (state) => {
    localStorage.setItem('accessToken', state.accessToken);

    setAuthState(state);
  }


  const logout = async () => {
    try {
      await apiLogout();
    } catch (err) {
      console.error('Failed to logout from server:', err);
    } finally {
      localStorage.removeItem('accessToken');
      setAuthState({});
    }
  }


  const contextData = {
    userId: authState._id,
    email: authState.email,
    accessToken: authState.accessToken,
    isAuthenticated: !!authState.email,
    changeAuthState,
    logout
  }


  return (
    <AuthContext.Provider value={contextData}>
      {props.children}
    </AuthContext.Provider>
  )
}



export function useAuthContext() {
  const authDate = useContext(AuthContext);

  return authDate;
}