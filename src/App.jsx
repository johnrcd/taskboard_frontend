import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from './util/PrivateRoute';
import IndexPage from './pages/IndexPage';
import About from './pages/About';
import SubmitTask from './pages/SubmitTask';
import Login from './pages/Login';
import PostComment from './pages/PostComment';

export default function App() {    
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/submit" element={<PrivateRoute component={<SubmitTask />}/>}/>
                <Route path="/comment" element={<PrivateRoute component={<PostComment />}/>}/>
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}