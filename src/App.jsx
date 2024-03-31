import './App.css'

export default function App() {
    return (
        <div className="max-w-screen-md mx-auto">
            <h1 className="text-9xl font-bold underline">
                Hello world!
            </h1>
            <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
                <div>
                    <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                    <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"></svg>
                    </span>
                </div>
                <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
                <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
                </p>
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
        </div>
    )
}