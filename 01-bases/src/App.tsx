//import { BasicFunctions } from './typescript/BasicFunctions'
//import { ObjectLiterals } from './typescript/ObjectLiterals'
// import { BasicTypes } from './typescript/BasicTypes'
//import { Counter } from "./components/Counter"

// import { LoginPage } from "./components/LoginPage"
//import { UsersPage } from "./components/UsersPage"
import { FormsPage } from "./components/FormsPage"
import { AuthProvider } from "./context/AuthContext"

function App() {

  return (
    /*
    * Para poder hacer uso de nuestro provider AuthProvider, debemos envolver nuestra aplicación con este componente
    * todo lo que esta adentro del AuthProvider va a tener acceso al contexto global y es el children
    */
   <AuthProvider>
      <div className="flex flex-col justify-center items-center h-svh">
     <h1 className="text-4xl mb-5">
      React + TypeScript
     </h1>
    {/* <BasicTypes /> */}
    {/* <ObjectLiterals /> */}
    {/* <BasicFunctions /> A esto se le conoce como promps*/} 
    {/* <Counter /> */}
    {/* <LoginPage /> */}
    {/* < UsersPage /> */}
    <FormsPage />
    </div>
   </AuthProvider>
  
  )
}

export default App
