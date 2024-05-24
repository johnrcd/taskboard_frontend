import MainHeader from "../components/MainHeader";

const About = () => {
    return (
        <div className="bg-slate-900 min-h-screen flex justify-center">
            <div className="w-full max-w-7xl text-slate-200 ml-2 mr-2">
                <MainHeader />
                <main className="max-w-xl m-auto mt-6">
                    <p>
                        <b>Welcome to the Taskboard!</b>
                    </p> <br />
                    <p>
                        This website is my personal ticket tracker for my projects, whether it's my
                        games, music, websites, or anything else! You can suggest features that you
                        want added, note down any issues that you find, or give ideas for new
                        projects.
                    </p> <br />

                    <hr className="border-1 border-slate-500"/> <br />

                    <p className="text-slate-300">
                        <b>NOTE:</b> This website is still being actively developed! Currently,
                        you can view existing tasks, but there's no system in place to add new
                        tasks yet.
                    </p>
                </main>
            </div>
        </div>
    );
};

export default About;