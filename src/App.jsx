import './App.css'
import MainHeader from './components/MainHeader.jsx';
import MainFooter from './components/MainFooter.jsx';
import TaskOverview from './components/TaskOverview.jsx';
import TaskDetails from './components/TaskDetails.jsx';
import TaskList from './containers/TaskList.jsx';

export default function App() {

    const taskClickHandler = () => {
        console.log("Task clicked.")
    }
    return (
        <div className="bg-slate-900 min-h-screen">
        <div className="max-w-screen-xl mx-auto">
            <MainHeader />
            <TaskList />
            <div className="flex flex-row space-x-5">
                <div className="max-w-[320px] flex-none">
                    <TaskOverview
                        uuid="2676ac9c-409e-4c08-922c-1bc2ffefbc80"
                        summary="Camera stutters after death on bosses."
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
                        summary="make a better game"
                        description="please"
                        category="Games"
                        type="Concept"
                        status="To Do"
                        author="domo"
                        onTaskClick={taskClickHandler}
                    />
                    <TaskOverview
                        uuid="7e92c7ac-b682-427e-9b29-e802f4973a63"
                        summary="testing truncation by making a super long title that never ends"
                        description="please"
                        category="Application"
                        type="Feature"
                        status="In Progress"
                        author="domo"
                        onTaskClick={taskClickHandler}
                    />
                </div>
                <div className="w-full">
                    <TaskDetails
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
                </div>
            </div>
            
            <MainFooter />
        </div>
        </div>
    )
}