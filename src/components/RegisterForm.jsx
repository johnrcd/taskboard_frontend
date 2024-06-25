import { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = ({onRegisterHandler}) => {
    const [username, setUsername]               = useState("");
    const [password, setPassword]               = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (password != confirmPassword) {
            alert("Passwords do not match.");
            return;
        }
        else onRegisterHandler(username, password);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="
                bg-offset-background
                text-offset-text
                p-2
                rounded-t-md
                w-72
            ">
                <h2 className="text-stone-100 text-2xl font-bold text-center">Create an Account</h2>
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

                <label className="mt-5 block" htmlFor="password">Password</label>
                <input
                    className="form-input-text"
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                /><br />

                <label className="block" htmlFor="confirmPassword">Confirm Password</label>
                <input
                    className="form-input-text"
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    required
                /><br />

                <div className="flex justify-center">
                    <button
                        className="form-button-submit"
                        type="submit"
                    >
                        Register
                    </button>
                </div>

                <hr className="border-1 border-slate-500"/>

                <p className="text-center mt-5">Already have an account?</p>
                <Link
                    className="px-3 hover:underline hover:text-primary-accent text-center block font-bold"
                    to="/login"
                >
                    Login
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

export default RegisterForm;