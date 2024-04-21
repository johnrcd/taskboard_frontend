import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Tasks from './pages/Tasks';

export default function App() {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/tracker" element={<Tasks/>} />
            </Routes>
        </BrowserRouter>
    )
}