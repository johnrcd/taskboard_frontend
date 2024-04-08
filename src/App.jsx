import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tasks from './pages/Tasks';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Tasks/>} />
            </Routes>
        </BrowserRouter>
    )
}