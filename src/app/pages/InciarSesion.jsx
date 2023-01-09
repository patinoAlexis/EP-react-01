import { FormularioUsuario } from "../components/FormularioUsuario";

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

    return (
        <FormularioUsuario path={path} titulo="Iniciar Sesión" tipo_form="inicio" ></FormularioUsuario>
    )
}