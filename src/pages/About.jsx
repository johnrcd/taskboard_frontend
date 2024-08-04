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
                    The website is technically functional, but there's definitely a few
                    features that could be added.
                </p> <br />
                <ul className="pl-4 list-disc list-inside">
                    <li>User Profiles (including personalized lists for tasks you've created)</li>
                    <li>Task Filtering (completion status, date posted, etc)</li>
                    <li>Notifications (specifically for your tasks)</li>
                    <li>Quality of Life (password reset, improve the ugly colours, idk)</li>
                </ul> <br />
                <p> 
                    I'll be working on this website when I can, but stuff might get in the
                    way — we'll have to see. Either way, the website is up, so have fun with
                    it!
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