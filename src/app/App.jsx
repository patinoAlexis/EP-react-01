import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { Index } from "./pages";
import { CrearCuenta } from "./pages/CrearCuenta";
import { IniciarSesion } from "./pages/InciarSesion";

export const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" >
                    <Route index element={<Index></Index>}></Route>
                    <Route path="crear-cuenta" element={<CrearCuenta></CrearCuenta>} ></Route>
                    <Route path="iniciar-sesion" element={<IniciarSesion></IniciarSesion>} ></Route>

                </Route>
             {/* <Route path="/crear-cuenta" element={<CrearCuenta></CrearCuenta>} ></Route> */}

                {/* <Route index path="/" element={<Index></Index>} ></Route> */}
                {/* <Route path="/crear-cuenta" element={<CrearCuenta></CrearCuenta>} ></Route> */}
                <Route path="*"></Route>
            </Routes>
        </BrowserRouter>
    )
}