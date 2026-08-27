import { createContext, useContext, useState } from "react";


//1. Tipado del objeto principal del contexto
type User = {
    email: string;
    pwd?: string;
} | null

type AuthContextType ={
    user: User | null;
    login: (email: string) => boolean;
    logout: () => void;
}

//2. Creacion del contexto
const AuthContext = createContext<AuthContextType | null> (null);

// 4. hook personalizado: la exposicion de contexto a componentes de la aplicacion
export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) throw new Error ("useAuth debe usarse dentro de AuthProvider");
    return context;
}

//3. Crear el provider: medio por el cual manejamos el estado global
export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    
    const [user, setUser] = useState<User>(null);
    
    const login = (correo: string): boolean =>{
        const isAllowed = correo.endsWith('.edu')
         if (isAllowed){
            setUser({email: correo})
         }

        return isAllowed;
    };
    const logout = () =>{
        setUser(null);
    };

    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
} 