export const BasicTypes = () => {

  const name: string = "Miguel";
  const age: number = 30;
  const isActive: boolean = false;

  const powers : string[] = ['React','ReactNative','Astro'];

  return (
    <>
      {`Hello, ${name} tu edad es: ${age} | ${isActive ? 'Activo' : 'Inactivo'}`}
      <p>
        {powers.join(', ')}
      </p>
    </>
  )
}
