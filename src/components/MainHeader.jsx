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
            ">
                <ul className="flex justify-center gap-x-3 divide-x divide-stone-300/30">
                    <li className="pl-3 hover:underline"><Link to="/about">About</Link></li>
                    <li className="pl-3 hover:underline"><Link to="/">View Board</Link></li>
                    <li className="pl-3 hover:underline"><Link to="/submit">Submit A Task</Link></li>
                    <li className="pl-3 hover:underline">Sign In</li>
                    <li className="pl-3 hover:underline">Register</li>
                </ul>
            </nav>
        </header>
    )
};

export default MainHeader;