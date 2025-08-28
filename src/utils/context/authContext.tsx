import { getCookie } from 'cookies-next';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface AuthContextProps {
    isAuthenticated: boolean;
    loginContext: () => void;
    logoutContext: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

function deleteAllCookies() {
  document.cookie.split(";").forEach((cookie) => {
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  });
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        const token = getCookie("access_token_gnawalma");
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    const loginContext = () => {
        setIsAuthenticated(true);
    };

    const logoutContext = () => {
        localStorage.clear();
        sessionStorage.clear();
        deleteAllCookies();
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, loginContext, logoutContext }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
