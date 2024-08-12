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
import Task from './pages/Task';
import EditProfile from './pages/EditProfile';

export default function App() {    
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <Routes>
                <Route path="/"         element={<IndexPage />} />
                <Route path="/task/"     element={<Task />} />
                <Route path="/about/"    element={<About />} />
                <Route path="/submit/"   element={<PrivateRoute component={<SubmitTask />}/>}/>
                <Route path="/login/"    element={<Login />} />
                <Route path="/logout/"   element={<Logout />} />
                <Route path="/register/" element={<Register />} />
                <Route path="/profile/"  element={<Profile />} />
                <Route path="/profile/edit/"  element={<PrivateRoute component={<EditProfile />}/>} />
            </Routes>
        </BrowserRouter>
    )
}