import MainHeader from "../components/MainHeader";
import DefaultPage from "./templates/DefaultPage";

const About = () => {
    return (
        <DefaultPage>
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
                <p> 
                    By default, everyone has access to view the Taskboard. However, if you want
                    to interact with the site, you'll need to register an account. This will
                    give you the ability to submit tasks and post comments.
                </p> <br />
                <hr className="border-1 border-slate-500"/> <br />
                <p> 
                    Created by Rovi Decena.
                </p> <br />
            </main>
        </DefaultPage>
    );
};

export default About;
