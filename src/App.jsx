import "./index.css"
import { Routes, Route } from "react-router-dom";
import GamePage from "./pages/GamePage.jsx";
import MainPage from "./pages/MainPage.jsx";
import LifelinesContextProvider from "./contexts/LifelinesContext.jsx";

function App() {
    // Test comment
    return (
        <LifelinesContextProvider>
            <Routes>
                <Route path="/" element={<MainPage />}/>
                <Route path="/game" element={<GamePage />}/>
            </Routes>
        </LifelinesContextProvider>
    )
}

export default App