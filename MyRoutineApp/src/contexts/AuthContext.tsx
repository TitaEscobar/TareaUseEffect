import { createContext, useState } from "react";


//1. Tipado del objeto principal del contexto
type User = {
    email: string;
    pwd?: string;
} 

type AuthContextType ={
    user: User | null;
    login: () => {};
    logout: () => void;
}

//2. Creacion del contexto
const AuthContext = createContext<AuthContextType | null> (null);


//3. Crear el provider: medio por el cual manejamos el estado global
export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    
    const [user, setUser] = useState(null);
    const login =() =>{
        return false;
    };
    const logout = () =>{

    };

    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
} 