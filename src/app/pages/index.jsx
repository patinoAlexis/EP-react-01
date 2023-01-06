import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export const Index = () => {

    return (
        <>
            <Header></Header>
            <main id="main">

                <section id="breadcrumbs" className="breadcrumbs">
                    <div className="container">

                        <ol>
                            <li><a href="index.html">Home</a></li>
                            <li>Inner Page</li>
                        </ol>
                        <h2>Inner Page</h2>

                    </div>
                </section>

                <section className="inner-page">
                    <div className="container">
                        <p>
                            Example inner page template
                        </p>
                    </div>
                </section>

            </main>
            <Footer></Footer>
        </>
    )
}