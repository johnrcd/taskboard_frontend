import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = ({onLoginHandler, errors}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        onLoginHandler(username, password);
    }

    return (
        <form className="bg-gradient-to-b from-cyan-400/10 to-blue-500/20 rounded-lg px-4 py-3 inline-block w-full" onSubmit={handleSubmit}>
            <h2 className="text-stone-100 text-2xl font-bold text-center">Taskboard Login</h2> <br />
            <label className="text-stone-200" htmlFor="username">Username</label><br />
            <input
                className="
                    bg-slate-900
                    text-stone-300
                    rounded-md p-1
                    w-64
                "
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
            /><br />

            <label className="text-stone-200" htmlFor="password">Password</label><br />
            <input
                className="
                bg-slate-900
                    text-stone-300
                    rounded-md p-1
                    w-64
                "
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            /><br />

            <br />

            <div className="flex justify-center">
                <button
                    className="
                        bg-cyan-800 hover:bg-cyan-700 
                        text-white font-bold
                        py-2 px-4
                        border-b-4 border-sky-900
                        hover:border-sky-800
                        rounded
                    "
                    type="submit"
                >
                    Login
                </button>
            </div>

            {
            errors.map((error, index) => {
                <p className="text-stone-200">
                    {error}
                </p>
            })
            }

            <br /> <hr className="border-1 border-slate-500"/> <br />

            <p className="text-stone-200 text-center">Don't have an account?</p>
            <Link
                className="px-3 hover:underline text-stone-200 hover:text-stone-100 text-center block font-bold"
                to="/login"
            >
                Register
            </Link>

            <br />

            <Link
                className="px-3 hover:underline text-stone-200 hover:text-stone-100 text-center block font-bold"
                to="/"
            >
                Go to Home Page
            </Link>


        </form>
    )
};

export default LoginForm;