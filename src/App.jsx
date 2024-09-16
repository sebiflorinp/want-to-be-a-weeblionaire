import "./index.css"
import { Routes, Route } from "react-router-dom";
import GamePage from "./pages/GamePage.jsx";
import MainPage from "./pages/MainPage.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/game" element={<GamePage />}/>
        </Routes>
    )
}

export default App