import { Header } from "./components/header"
import { HashRouter, Route, Routes } from "react-router-dom";
import { Index } from "./pages";

export const App = () => {

    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Index></Index>} ></Route>
            </Routes>
        </HashRouter>
    )
}