import './App.css'
import MainHeader from './components/MainHeader.jsx';
import MainFooter from './components/MainFooter.jsx';
import TaskOverview from './components/TaskOverview.jsx';

export default function App() {
    return (
        <div className="bg-slate-900">
        <div className="max-w-screen-md mx-auto">
            <MainHeader />
            <TaskOverview
                id="2676ac9c-409e-4c08-922c-1bc2ffefbc80"
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
            />
            <TaskOverview
                id="faa73f64-391d-452c-9889-8823ae50bf25"
                title="make a better game"
                description="please"
                category="Games"
                type="Concept"
                status="To Do"
                author="domo"
            />

            <br/>
            <br/>
            <br/>

            <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                <div className="shrink-0">
                    {/* <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo"> */}
                </div>
                <div>
                    <div className="text-xl font-medium text-black">ChitChat</div>
                    <p class="text-slate-500">You have a new message!</p>
                </div>
            </div>

            <br/>
            <br/>
            <br/>
            
            <div class="space-y-4">
                <div class="w-96 bg-white shadow rounded">
                    w-96
                </div>
                <div class="w-80 bg-white shadow rounded">
                    w-80
                </div>
                <div class="w-72 bg-white shadow rounded">
                    w-72
                </div>
                <div class="w-64 bg-white shadow rounded">
                    w-64
                </div>
                <div class="w-60 bg-white shadow rounded">
                    w-60
                </div>
                <div class="w-56 bg-white shadow rounded">
                    w-56
                </div>
                <div class="w-52 bg-white shadow rounded">
                    w-52
                </div>
                <div class="w-48 bg-white shadow rounded">
                    w-48
                </div>
            </div>
            <div class="space-y-5">
            <div class="p-3 bg-white shadow rounded-lg">
                <h3 class="text-xs border-b">font-sans</h3>
                <p class="font-sans">
                The quick brown fox jumps over the lazy dog.
                </p>
            </div>
            <div class="p-3 bg-white shadow rounded-lg">
                <h3 class="text-xs border-b">font-serif</h3>
                <p class="font-serif">
                The quick brown fox jumps over the lazy dog.
                </p>
            </div>
            <div class="p-3 bg-white shadow rounded-lg">
                <h3 class="text-xs border-b">font-mono</h3>
                <p class="font-mono">
                The quick brown fox jumps over the lazy dog.
                </p>
            </div>
            </div>
            <MainFooter />
        </div>
        </div>
    )
}