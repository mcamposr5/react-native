import { useEffect, useRef, useState } from "react"
import type { User } from "../interfaces/reqres.response";
import { loadUsersAction } from "../actions/load-users.action";



// Esto es un custom hook para manejar la lógica relacionada con los usuarios
export const useUsers = () => {
  
  const [users, setUsers] = useState<User[]>([]);
  const currentPageRef = useRef(1);
  console.log(users);  

  useEffect(() => {
    // Llamar a la acción para cargar los usuarios
    loadUsersAction(2)
      .then(setUsers)
  }, []);

  // Funciones para los botones de siguiente y anterior página se podrían agregar aquí
  const nextPage = async () => {
    currentPageRef.current += 1;
    const newUsers = await loadUsersAction(currentPageRef.current);
    
    if (users.length > 0) {
      setUsers(newUsers);
    } else {
      currentPageRef.current -= 1; // Revertir el cambio si no hay usuarios
    }
  }

  const prevPage = async () => {
    if (currentPageRef.current < 1) return;
      currentPageRef.current -= 1;

      const users = await loadUsersAction(currentPageRef.current);
      setUsers(users);
  }

    return {
    users,

    nextPage,
    prevPage,
    }
}
