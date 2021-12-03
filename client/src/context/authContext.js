import { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(false);
    const [token, setToken] = useState("");

    const handleAuth = (band) => {
        setAuth(band);
        console.log(band)
    };

    const handleToken = (token) => {
        setToken(token);
        console.log(token)
    };

    const data = {auth, handleAuth, token, handleToken};
    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
};

export { AuthProvider };
export default AuthContext;