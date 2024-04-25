import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/Home';
import IndexPage from './pages/IndexPage';

export default function App() {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
                <Route path="/" element={<IndexPage/>} />
                <Route path="/about" element={<About/>} />
            </Routes>
        </BrowserRouter>
    )
}