import { HashRouter, Route, Routes } from "react-router-dom";
import { Index } from "./pages";
import { CrearCuenta } from "./pages/CrearCuenta";

export const App = () => {

    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<CrearCuenta></CrearCuenta>} ></Route>

                {/* <Route index path="/" element={<Index></Index>} ></Route> */}
                <Route path="/crear-cuenta" element={<CrearCuenta></CrearCuenta>} ></Route>

            </Routes>
        </HashRouter>
    )
}