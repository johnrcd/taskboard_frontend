import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const MainHeader = () => {
    const [isNavigationEnabled, setIsNavigatorEnabled] = useState(false);

    const handleNav = () => {
        setIsNavigatorEnabled(!isNavigationEnabled);
    };

    const navigationLinks = [
        { id: 1, path: "/about",  text: "About"         },
        { id: 2, path: "/",       text: "View Board"    },
        { id: 3, path: "/submit", text: "Submit A Task" },
    ];

    return (
        <>
            {/* Desktop Navigation */}

            <header className="pt-5 pb-5 hidden md:flex flex-col justify-center">
                <h1 className="flex-1 text-4xl md:text-6xl font-bold text-center text-stone-100">
                    The Taskboard
                </h1>
                <p className="flex-1 text-base font-normal text-center text-stone-300 mt-2">Created by Rovi Decena</p>

                <nav className="
                    text-base font-normal text-center text-stone-300
                    mt-2 p-2 flex-1
                    bg-gradient-to-r from-cyan-500/10 to-blue-500/10
                    rounded-lg
                    hidden md:block
                ">
                    <ul className="hidden md:flex justify-center divide-x divide-stone-300/30">
                    {navigationLinks.map(item => (
                        <li key={item.id}>
                            <Link
                                className="px-3 hover:underline hover:text-stone-100"
                                to={item.path}
                            >
                                {item.text}
                            </Link>
                        </li>
                    ))}
                    </ul>
                </nav>
            </header>

            {/* Mobile Navigation Menu */}

            <header>
                <nav className="
                    text-base font-normal text-center text-stone-300
                    p-2 flex-1
                    m-0

                    fixed md:hidden
                    right-0 top-0
                    bg-gray-900
                    w-full
                ">
                    <div className="flex flex-row justify-around">
                        <h1 className="flex-1 text-2xl md:text-6xl font-bold text-left text-stone-100 inline">
                            The Taskboard
                        </h1>

                        <div onClick={handleNav} className="flex-none">
                            {isNavigationEnabled ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                        </div>
                    </div>

                    <ul
                        className={
                            isNavigationEnabled
                            ? 'block md:hidden right-0 top-0 w-full border-r border-r-gray-900 bg-slate-900'
                            : 'h-[0%] fixed bottom-0 left-[-100%] top-[-100%]'
                        }
                    >
                    {navigationLinks.map(item => (
                        <li key={item.id}>
                            <Link
                                className="px-3 hover:underline hover:text-stone-100"
                                to={item.path}
                            >
                                {item.text}
                            </Link>
                        </li>
                    ))}
                    </ul>
                </nav>
            </header>

            {/* how do you properly prevent a fixed nav bar from overlapping... */}
            
            <div className="block md:hidden">
                <br /> 
                <br />
            </div>
        </>
    )
};

export default MainHeader;