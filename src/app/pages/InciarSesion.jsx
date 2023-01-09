import { FormularioUsuario } from "../components/FormularioUsuario";
import Swal from 'sweetalert2';
export const IniciarSesion = () => {
    const path = [
        {
            link: "/",
            nombre: "Inicio"
        },
        {
            link: "",
            nombre: "Iniciar Sesión"
        }
    ]
    const sesion = (datos) => {
        // datos.preventDefault();
        fetch('https://phpstack-913586-3171019.cloudwaysapps.com/inicio_sesion.php', {
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
                    text: 'El nombre de usuario es incorrecto',
                  })
            } else if(res === "contra-incorrecta"){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'La contraseña no coincide con el usuario',
                  })
            } else if(res[0] == 'exito'){
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
        <FormularioUsuario path={path} titulo="Iniciar Sesión" tipo_form="inicio" submitFormulario={sesion} ></FormularioUsuario>
    )
}