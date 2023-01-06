import { DatosUsuario } from "../components/DatosUsuario"
import { Footer } from "../components/Footer"
import { GeneradorContra } from "../components/GeneradorContra"
import { Header } from "../components/Header"
import { HeaderSection } from "../components/HeaderSection"

export const CrearCuenta = () => {
    const path = [
        {
            link: "/",
            nombre: "Inicio"
        },
        {
            link: "",
            nombre: "Crear cuenta"
        }
    ]

    return (
        <>
            <Header></Header>
            <main id="main">
                <HeaderSection titulo="Crear cuenta" path={path}></HeaderSection>
                <section className="inner-page">
                    <div className="container">
                        <DatosUsuario></DatosUsuario>
                    </div>
                </section>

            </main>
            <Footer></Footer>
        </>
    )
}