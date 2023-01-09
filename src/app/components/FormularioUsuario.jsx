import { DatosUsuario } from "../components/DatosUsuario"
import { Footer } from "../components/Footer"
import { GeneradorContra } from "../components/GeneradorContra"
import { Header } from "../components/Header"
import { HeaderSection } from "../components/HeaderSection"

export const FormularioUsuario = ({path , titulo, tipo_form, submitFormulario, isLoggedIn}) => {
    return (
        <>
            <Header isLoggedIn={isLoggedIn}></Header>
            <main id="main">
                <HeaderSection titulo={titulo} path={path}></HeaderSection>
                <section className="inner-page">
                    <div className="container">
                        <DatosUsuario titulo={titulo} tipo={tipo_form} submitFormulario={submitFormulario}></DatosUsuario>
                    </div>
                </section>

            </main>
            <Footer></Footer>
        </>
    )
}