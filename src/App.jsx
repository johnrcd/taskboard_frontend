import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from './pages/IndexPage';
import About from './pages/About';
import SubmitTask from './pages/SubmitTask';

export default function App() {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
                <Route path="/" element={<IndexPage/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/submit" element={<SubmitTask/>} />
            </Routes>
        </BrowserRouter>
    )
}