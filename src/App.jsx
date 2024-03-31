import './App.css'
import MainHeader from './components/MainHeader.jsx';
import MainFooter from './components/MainFooter.jsx';
import TaskOverview from './components/TaskOverview.jsx';

export default function App() {

    const taskClickHandler = () => {
        console.log("Task clicked.")
    }
    return (
        <div className="bg-slate-900">
        <div className="max-w-screen-xl mx-auto">
            <MainHeader />
            <div className="max-w-[340px]">
                {/* <h2 className="
                    text-white text-2xl text-center font-bold m-0 p-0
                ">
                    Tasks
                </h2> */}
                <TaskOverview
                    uuid="2676ac9c-409e-4c08-922c-1bc2ffefbc80"
                    title="Camera stutters after death on bosses."
                    description="
                        idk what's happening but whenever you die in monospace during the first boss
                        sometimes the camera just starts jittering like crazy. it lasts like that
                        until you die, but sometimes it stays and sometimes it goes away.
                    "
                    category="Games"
                    type="Issue"
                    status="To Do"
                    author="Zer0"
                    onTaskClick={taskClickHandler}
                />
                <TaskOverview
                    uuid="faa73f64-391d-452c-9889-8823ae50bf25"
                    title="make a better game"
                    description="please"
                    category="Games"
                    type="Concept"
                    status="To Do"
                    author="domo"
                    onTaskClick={taskClickHandler}
                />

            </div>
            <br/>
            <br/>
            <br/>

            <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                <div className="shrink-0">
                    {/* <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo"> */}
                </div>
                <div>
                    <div className="text-xl font-medium text-black">ChitChat</div>
                    <p className="text-slate-500">You have a new message!</p>
                </div>
            </div>
            
            <MainFooter />
        </div>
        </div>
    )
}