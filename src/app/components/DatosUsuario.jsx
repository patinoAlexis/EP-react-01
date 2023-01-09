

export const DatosUsuario = ({titulo}) => {
    let boton = "Registrarse"
    if(titulo === "iniciar"){
        boton = "Aceptar"
    }
    return (
        <>
        <div className="d-flex align-content-center justify-content-center">
            <div className="card  w-55">
                <div className="card-body">
                    <h3 className="card-title text-center">{titulo}</h3>
                    <form className="d-flex checkbox-form row">
                        <div className="form-group col-12 pb-3">
                            <label htmlFor="fc-du-usuario">Nombre de usuario</label>
                            <input type="text" className="form-control" id="fc-du-usuario"></input>
                        </div>
                        <div className="form-group col-12 pb-4">
                            <label htmlFor="fc-du-contra">Contraseña</label>
                            <input type="password" className="form-control" id="fc-du-contra" ></input>
                        </div>
                        <div className="col-12 justify-content-center d-flex">
                            <button type="submit" className="btn btn-primary col-5 justify-content-center">{boton}</button>

                        </div>
                    </form>
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                </div>
            </div>
        </div>
        </>
    )
}

DatosUsuario.defaultProps = {
    tipo: "iniciar",
    titulo: "Iniciar sesion"
}