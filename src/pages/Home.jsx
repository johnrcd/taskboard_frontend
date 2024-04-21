import MainHeader from "../components/MainHeader";

const Home = () => {
    return (
        <div className="bg-slate-900 min-h-screen flex justify-center">
            <div className="w-full max-w-2xl text-slate-200">
                <MainHeader />
                <main className="bg-gradient-to-b from-cyan-400/5 to-blue-500/10 rounded-lg px-4 py-3">
                    <p>
                        <b>Welcome to Rovi's official(?) ticket tracker!</b>
                    </p> <br />
                    <p>
                        This website is for submitting tasks (or probably more accurately,
                        tickets) on my projects. You can request new features, report issues you
                        find, or even suggest new projects for me to work on.
                    </p> <br />
                    <p>
                        <b>NOTE:</b> This website was created for the purposes of demonstrating my
                        ability to create a full-stack web application. I don't treat this website
                        as an actual public suggestion/issue board, though feel free to use this
                        website regardless!
                    </p> <br />
                    <p>
                        (though, at the time of writing, this website is currently read-only)
                    </p>
                </main>
            </div>
        </div>
    );
};

export default Home;