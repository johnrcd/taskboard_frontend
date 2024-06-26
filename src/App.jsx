import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from './util/PrivateRoute';
import IndexPage from './pages/IndexPage';
import About from './pages/About';
import SubmitTask from './pages/SubmitTask';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Register from './pages/Register';
import Profile from './pages/Profile';

export default function App() {    
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
                <Route path="/"         element={<IndexPage />} />
                <Route path="/about"    element={<About />} />
                <Route path="/submit"   element={<PrivateRoute component={<SubmitTask />}/>}/>
                <Route path="/login"    element={<Login />} />
                <Route path="/logout"   element={<Logout />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile"  element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}