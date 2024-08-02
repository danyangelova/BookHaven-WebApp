import { createContext } from "react";


export const AuthContext = createContext({
    userId: '',
    email: '',
    accessToken: '',
    changeAuthState: () => null
  });

  console.log(AuthContext);
  