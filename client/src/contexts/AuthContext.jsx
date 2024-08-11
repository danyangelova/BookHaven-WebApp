import { createContext, useContext, useState } from "react";
import { logout as apiLogout } from '../api/authAPI';
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext({
  userId: '',
  email: '',
  accessToken: '',
  isAuthenticated: false,
  changeAuthState: () => null
});





export function AuthContextProvider(props) {
  const [authState, setAuthState] = useState({});
  const navigate = useNavigate();


  const changeAuthState = (state) => {
    localStorage.setItem('accessToken', state.accessToken);
    setAuthState(state);
  }


  const logout = async () => {
    try {
      await apiLogout();
      navigate('/');
      localStorage.removeItem('accessToken');
      setAuthState({});
    } catch (err) {
      console.error('Failed to logout from server:', err);
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
  const authData = useContext(AuthContext);

  return authData;
}