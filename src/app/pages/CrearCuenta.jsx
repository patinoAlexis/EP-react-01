import { FormularioUsuario } from "../components/FormularioUsuario"
import Swal from 'sweetalert2'

export const CrearCuenta = () => {
    const path = [
        {
            link: "/",
            nombre: "Inicio"
        },
        {
            link: false,
            nombre: "Crear Cuenta"
        }
    ]
    const hacerCuenta = (datos) => {
        // datos.preventDefault();
        fetch('https://phpstack-913586-3171019.cloudwaysapps.com/crear_cuenta.php', {
            method: 'POST',
            body: JSON.stringify({
                usuario: datos.usuario,
                contra: datos.contra
            }),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        })
        .then(res => res.json())
        .then( res => {
            if(res === "fallo"){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Hubo un error al guardar tus datos, Inténtalo de nuevo',
                  })
            } else if(res === "nombre-igual"){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'El nombre de usuario que escogiste ya esta en uso',
                  })
            } else{
                Swal.fire({
                    icon: 'success',
                    title: 'Exito'
                })
                . then(data => {
                    window.localStorage.setItem("idUsuario",res[1])
                    window.localStorage.setItem("isLoggedIn",true)
                    window.location.href = '/';
                })
            }
        })
        .catch(err => console.log(err));
    }

    return (
        <>
            <FormularioUsuario path={path} titulo="Crear cuenta" tipo_form="crear" submitFormulario={hacerCuenta}></FormularioUsuario>
        </>
    )
}