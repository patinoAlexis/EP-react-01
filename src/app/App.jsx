import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { Index } from "./pages";
import { CrearCuenta } from "./pages/CrearCuenta";
import { IniciarSesion } from "./pages/InciarSesion";
const isLoggedIn = () =>{
    return window.localStorage.getItem('isLoggedIn');
}

export const App = () => {
    const logged = isLoggedIn();
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" >
                    <Route index element={<Index isLoggedIn={logged}></Index>}></Route>
                    <Route path="crear-cuenta" element={<CrearCuenta isLoggedIn={logged}></CrearCuenta>} ></Route>
                    <Route path="iniciar-sesion" element={<IniciarSesion isLoggedIn={logged}></IniciarSesion>} ></Route>

                </Route>
             {/* <Route path="/crear-cuenta" element={<CrearCuenta></CrearCuenta>} ></Route> */}

                {/* <Route index path="/" element={<Index></Index>} ></Route> */}
                {/* <Route path="/crear-cuenta" element={<CrearCuenta></CrearCuenta>} ></Route> */}
                <Route path="*"></Route>
            </Routes>
        </BrowserRouter>
    )
}