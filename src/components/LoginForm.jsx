import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = ({onLoginHandler, showError}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        onLoginHandler(username, password);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="
                bg-offset-background
                text-offset-text
                p-2
                rounded-t-md
                w-full
            ">
                <h2 className="text-2xl font-bold text-center">Taskboard Login</h2>
            </div>
            <div className="
                bg-primary-bcakground
                text-primary-text
                p-2
                rounded-b-md
                border-4
                border-t-0
                border-offset-background
                w-full
            ">
                <label htmlFor="username">Username</label><br />
                <input
                    className="form-input-text"
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                /><br />

                <label htmlFor="password">Password</label><br />
                <input
                    className="form-input-text"
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                /><br />

                {showError &&
                <>
                    <p className="text-center">
                        Username or password is invalid.
                    </p>
                </>
                }

                <div className="flex justify-center">
                    <button
                        className="form-button-submit"
                        type="submit"
                    >
                        Login
                    </button>
                </div>

                <hr className="border-1 border-slate-500"/>

                <p className="text-center mt-5">Don't have an account?</p>

                <Link
                    className="px-3 hover:underline hover:text-primary-accent text-center block font-bold"
                    to="/register"
                >
                    Register
                </Link>

                <br />

                <Link
                    className="px-3 hover:underline hover:text-primary-accent text-center block font-bold"
                    to="/"
                >
                    Go to Home Page
                </Link>
            </div>
        </form>
    )
};

export default LoginForm;