import { createContext, useContext, useEffect, useState, type PropsWithChildren } from "react";


enum AuthStatus {
    'authenticated' = 'authenticated',
    'notAuthenticated' = 'notAuthenticated',
    'checking' = 'checking',
}

/*
 * Importante definir como luce el contexto, para ello definimos una interfaz 
 */
interface AuthState {
    status: AuthStatus;
    token?: string;

    user?: User;
    isCheking: boolean;
    isAuthenticated: boolean;
    //hola: string;

    // Definimos las acciones que va a tener el contexto
    loginWithEmailAndPassword: (email: string, password: string) => void;
    logout: () => void;
}

interface User {
    name: string;
    email: string;
}


// El objetivo es poveer información a nivel global sobre la aplicación
export const AuthContext = createContext({
    //Acá se define el valor que va a tener nuestro contexto o como luce el contexto
} as AuthState);

/* Exponer un custom hook que retorne el contexto, manejo de estados globales
    esto va a exponer todo lo que tenga el contexto AuthContext 
*/
export const useAuthContext = () => useContext(AuthContext);

/*
 * Para poder proveer este contexto de manera global es necesario crear un functional component o en este caso seria un provider (proveedor)
 */
export const AuthProvider = ({children}: PropsWithChildren) => {

    const [status, setStatus] = useState(AuthStatus.checking);
    const [user, setUser] = useState<User>();

    useEffect(() => {
        // aquí podríamos hacer la verificación del token
        setTimeout(() => {
            setStatus(AuthStatus.notAuthenticated)
            //console.log('Token verificado')
        }, 1500);
    }, [])

    const loginWithEmailAndPassword = (email: string, password: string) => {
        // Lógica de autenticación
        setUser({
            name: 'Miguel Campos',
            email: email
    });
    setStatus(AuthStatus.authenticated);
    }

    const logout = () => {
        setUser(undefined);
        setStatus(AuthStatus.notAuthenticated);
    }
    
    return(
    <AuthContext.Provider value ={{ 
        status: status,
        user: user,

        // Esto es conocido como un getter, es una propiedad calculada basada en otra propiedad
        isCheking: status === AuthStatus.checking,
        isAuthenticated: status === AuthStatus.authenticated,

        // LoginWhitEmailAndPassword es un metodo o accion
        loginWithEmailAndPassword,
        logout,
    }}>
        {children}
        </AuthContext.Provider>
    )
}
