const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }
const movil_toggle = () => {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
}


export const Header = ({opcion}) => {

    return (
        <header id="header" className="fixed-top header-inner-pages">
            <div className="container d-flex align-items-center">

                {/* <h1 className="logo me-auto"><a href="index">Arsha</a></h1> */}
                <a href="/" className="logo me-auto px-2"><img src="/src/static/img/logo_blanco.png"  alt="Crear cuenta" className="img-fluid" /> </a>

                <nav id="navbar" className="navbar">
                    <ul>
                        
                        <li><a className={"nav-link scrollto " + (opcion === "Acerca de" ? "active" : "")} href="#about">Acerca de</a></li>
                        <li><a className={"nav-link scrollto " + (opcion === "Servicios" ? "active" : "")} href="#services">Servicios</a></li>
                        <li><a className={"nav-link scrollto " + (opcion === "Iniciar sesion" ? "active" : "")} href="./iniciar-sesion">Iniciar sesión</a></li>
                        <li><a className={"nav-link scrollto " + (opcion === "Crear cuenta" ? "active" : "")} href="./crear-cuenta">Crear cuenta</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle" onClick={movil_toggle}></i>
                </nav>

            </div>
        </header>
    )
}
Header.defaultProps = {
    opcion: "",
}