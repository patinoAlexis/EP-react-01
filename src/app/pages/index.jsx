import { Footer } from "../components/Footer"
import { GeneradorContra } from "../components/GeneradorContra"
import { Header } from "../components/Header"
import { HeaderSection } from "../components/HeaderSection"

export const Index = ({isLoggedIn}) => {
    return (
        <>
            <Header isLoggedIn={isLoggedIn}></Header>
            <main id="main">
                <HeaderSection></HeaderSection>
                <section className="inner-page">
                    <div className="container">
                        <GeneradorContra isLoggedIn={isLoggedIn}></GeneradorContra>
                    </div>
                </section>

            </main>
            <Footer></Footer>
        </>
    )
}