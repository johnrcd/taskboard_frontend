import MainHeader from "../components/MainHeader";

const About = () => {
    return (
        <div className="bg-slate-900 min-h-screen flex justify-center">
            <div className="w-full max-w-2xl text-slate-200">
                <MainHeader />
                <main className="bg-gradient-to-b from-cyan-400/5 to-blue-500/10 rounded-lg px-4 py-3">
                    <p>
                        <b>Welcome to the Taskboard!</b>
                    </p> <br />
                    <p>
                        This website is my personal ticket tracker for my projects, whether it's my
                        games, music, websites, or anything else! You can suggest features that you
                        want added, note down any issues that you find, or give ideas for new
                        projects.
                    </p> <br />
                    <p>
                        <b>NOTE:</b> This website was created for the purposes of demonstrating my
                        ability to create a full-stack web application. I don't treat this website
                        as an actual public suggestion/issue board, though feel free to use it
                        anyways!
                    </p> <br />
                    <p>
                        (at the time of writing, this website is currently read-only)
                    </p> <br />

                    <hr className="border-1 border-slate-500"/> <br />

                    <p className="text-slate-300">
                        Ticket is more accurate than Task, but a Ticketboard doesn't
                        have the same coolness as Taskboard, so that's why they're called tasks.
                    </p>
                </main>
            </div>
        </div>
    );
};

export default About;