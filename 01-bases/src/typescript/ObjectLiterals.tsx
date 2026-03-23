interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
}

interface Address {
    country: string;
    city: string;
    street?: string;
}


export const ObjectLiterals = () => {

    const person: Person = {
        firstName: "Miguel",
        lastName: "Campos",
        age: 29,
        address: {
            country: "España",
            city: "Madrid",
            street: '247'
        },
    };

  return (
    <>
        <h3>Objetos literales: </h3>
        <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  )
}
