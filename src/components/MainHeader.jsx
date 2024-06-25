import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { getUsername } from "../util/auth";
import { useAuthentication } from "../hooks/useAuthentication";

const MainHeader = () => {
    const [isNavigationEnabled, setIsNavigatorEnabled] = useState(false);
    const {isAuthenticated, isLoading} = useAuthentication();
    const username = getUsername();
    
    const handleNav = () => {
        setIsNavigatorEnabled(!isNavigationEnabled);
    };

    const login_link = isAuthenticated ?
    { id: 4, path: "/logout", text: "Logout" } :
    { id: 4, path: "/login", text: "Login" };

    const navigationLinks = [
        { id: 1, path: "/about",    text: "About"         },
        { id: 2, path: "/",         text: "View Board"    },
        { id: 3, path: "/submit",   text: "Submit A Task" },
        login_link,
    ];

    if (!isAuthenticated) { 
        navigationLinks.push({ id: 5, path: "/register", text: "Register"  });
    }

    return (
        <>
            {/* Desktop Navigation */}

            <header className="
                text-base font-normal text-offset-text
                p-2 flex-none
                bg-offset-background
                hidden lg:block
            ">
                <div className="
                    flex
                    max-w-screen-xl
                    m-auto
                ">
                    <h1 className="flex-1 text-2xl font-bold text-left text-offset-text block">
                        The Taskboard
                    </h1>
                    
                    <nav className="m-auto">
                        <ul className="hidden lg:flex justify-center divide-x divide-offset-tooltip">
                        {navigationLinks.map(item => (
                            <li key={item.id}>
                                <Link
                                    className="h-full px-3 hover:bg-offset-accent hover:text-offset-background"
                                    to={item.path}
                                >
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        </ul>
                    </nav>

                    <p className="flex-1 text-base font-normal text-right text-stone-300 m-auto">
                        {!isLoading && (isAuthenticated ?  username : "Not Logged In")}
                    </p> 
                </div>
            </header>

            {/* Mobile Navigation Menu */}

            <header>
                <nav className="
                    text-base font-normal text-center text-stone-300
                    p-2 flex-1
                    m-0

                    fixed lg:hidden
                    right-0 top-0
                    bg-gradient-to-r from-cyan-950 to-blue-950
                    w-full
                ">
                    <div className="flex flex-row justify-around">
                        <h1 className="flex-1 text-2xl font-bold text-left text-stone-100 inline">
                            The Taskboard
                        </h1>

                        <div onClick={handleNav} className="flex-none">
                            {isNavigationEnabled ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                        </div>
                    </div>

                    <ul
                        className={
                            isNavigationEnabled
                            ? 'block lg:hidden right-0 top-0 w-full'
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
                        <li className="flex-1 text-base font-normal text-center text-stone-400 m-auto mt-4">
                        {isAuthenticated ?  "Logged in as " + username + "." : "You are not logged in."}
                        </li> 
                    </ul>
                </nav>
            </header>

            {/* how do you properly prevent a fixed nav bar from overlapping... */}
            
            <div className="block lg:hidden">
                <br /> 
                <br />
            </div>
        </>
    )
};

export default MainHeader;