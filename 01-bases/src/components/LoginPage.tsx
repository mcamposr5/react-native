import { useAuthContext } from "../context/AuthContext";


export const LoginPage = () => {

    /*
    * Si queremos hacer uso del contexto global, debemos utilizar el custom hook que creamos en el contexto AuthContext
    */
    const { isCheking, isAuthenticated, loginWithEmailAndPassword, logout, user } = useAuthContext();

    if (isCheking) {
        return (<h3>Checking authentication...</h3>)
    }

  return (
    <>
    { isAuthenticated ? (
        <>
        <h3 className="text-green-500"> User is authenticated </h3>
        <h2>Bienvenido</h2>
        <pre>
            { JSON.stringify( user, null, 2 ) }
        </pre>
        <button
        onClick={ () => logout() } 
        className="bg-blue-500 p-2 text-white rounded-xl mt-2">Logout</button>
        </>
    ) : (
        <>
        <h3 className="text-red-500"> User is NOT authenticated </h3>
        <h2>Ingresar a la apliación</h2>
        <button 
        onClick={ () => loginWithEmailAndPassword( 'mcampos@gmail.com', 'abc123')}
        className="bg-blue-500 p-2 text-white rounded-xl mt-2">Login</button>
        </>
    )}
    </>
  )
}
