import { FormularioUsuario } from "../components/FormularioUsuario"


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

    return (
        <>
            <FormularioUsuario path={path} titulo="Crear cuenta" tipo_form="crear"></FormularioUsuario>
        </>
    )
}