import { useState } from "react";

export const useCounter = () => {

    const [count, setCount] = useState<number>(10);

    const increaseBy = (value: number) => { 
        //setCount(count + value);
        //setCount((current) => current + value );}
        setCount(Math.max(0, count + value));
    }

  // En un custom hooks es mejor retornar un objeto, es mas facil de escalar y mantener en un futuro.
  return {
    // Properties
    count,

    // Actions
    increaseBy,
  }
}
