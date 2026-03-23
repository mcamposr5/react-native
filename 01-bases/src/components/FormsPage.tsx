import { useForm } from "react-hook-form"

// Al formulario hay que indicarle el tipo de datos que va a manejar
interface FormData {  
    email: string;
    password: string;
}

export const FormsPage = () => {

    /*
    * El hook de useForm nos provee de varias herramientas para manejar formularios
    */
    const { 
        register,
        handleSubmit
    } = useForm<FormData>(
        {
            defaultValues: {
                email: 'miguelcampos@email.com',
                password: '123456'
            }
        }
    );

    // Para evitar recargar el navegador al enviar el formulario, se puede usar el handleSubmit que provee react-hook-form
    const onSubmit = (data: FormData) => {
        console.log({data});
    }

  return (
    // Si este es el componente padre no es necesario usar fragment <>
    //<>
    <form onSubmit={ handleSubmit( onSubmit )}>
        <h3>Formularios</h3>
        <div className="flex flex-col space-y-2 w-[500px]">
            <input type="email" 
            placeholder="Ingrese su correo" 
            className="border border-gray-300 p-2 rounded-xl"
            {...register('email', {
                required: 'El correo es obligatorio'
                })}
            />

            <input type="password" 
            placeholder="Ingrese su contraseña" 
            className="border border-gray-300 p-2 rounded-xl"
            {...register('password', {
                required: 'La contraseña es obligatoria'
            })}/>

            <button 
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-xl hover:bg-blue-600">
                Ingresar
            </button>
        </div>
    </form>
    //</>
  )
}
