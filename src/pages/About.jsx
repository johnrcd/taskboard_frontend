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
                    As it stands, this website can be considered complete. I have implemented
                    all the major features I sought out to when I initially planned this
                    website. However, there's always room for improvement, so I may periodically
                    update this website whenever I have time.
                </p> <br />
                <p> 
                    NOTE: This website has been created for demonstration purposes. Feel free
                    to use this website (I encourage it!), but keep in mind I won't be actively
                    checking this website out and actually processing tickets.
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