import { useCounter } from "../hooks/useCounter";

export const Counter = () => {

    // Utilizamos const {a, b} para desestructurar los valores retornados por el hook
    const {count, increaseBy} = useCounter()

  return (
    <>
      <h3 className="text-2xl ">
        Counter Component:  <small className="font-bold"> { count } </small>
      </h3>
      <div>
        <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => increaseBy(+1)}>+1</button>
        <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => increaseBy(-1)}>-1</button>
      </div>
    </>
  )
}
