import { Link } from "react-router-dom";

const MainHeader = () => {
    return(
        <header className="pt-5 pb-5 flex flex-col justify-center">
            <h1 className="flex-1 text-4xl md:text-6xl font-bold text-center text-stone-100">
                The Taskboard
            </h1>
            <p className="flex-1 text-base font-normal text-center text-stone-300 mt-2">Created by Rovi Decena</p>
            <nav className="
                text-base font-normal text-center text-stone-300
                mt-2 p-2 flex-1
                bg-gradient-to-r from-cyan-500/10 to-blue-500/10
                rounded-lg
            ">
                <ul className="flex justify-center divide-x divide-stone-300/30">
                    <li><Link className="px-3 hover:underline hover:text-stone-100" to="/about">About</Link></li>
                    <li><Link className="px-3 hover:underline hover:text-stone-100" to="/">View Board</Link></li>
                    <li><Link className="px-3 hover:underline hover:text-stone-100" to="/submit">Submit A Task</Link></li>
                    <li className="px-3 hover:underline hover:text-stone-100">Login</li>
                    <li className="px-3 hover:underline hover:text-stone-100">Register</li>
                </ul>
            </nav>
        </header>
    )
};

export default MainHeader;