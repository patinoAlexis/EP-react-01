

export const HeaderSection = ({titulo, path}) => {

    return (
        <>
            <section id="breadcrumbs" className="breadcrumbs">
                <div className="container">
                    <ol>
                        {path.map( (elemento => {
                            return <li key={elemento.nombre}><a href={elemento.link}>{elemento.nombre}</a></li>
                        }))}
                    </ol>
                    <h2>{titulo}</h2>

                </div>
            </section>
        </>
    )

}

HeaderSection.defaultProps = {
    titulo: "Generador de contraseñas",
    path: [{
        link: "/",
        nombre: "Inicio"
    }]
}