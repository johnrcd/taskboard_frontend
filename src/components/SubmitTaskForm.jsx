import { useState, useEffect } from 'react';
import { fetchFromApi } from "../util/api.js";
import { useProjects } from '../hooks/useProjects.js';

const SubmitTaskForm = () => {
    // const [projects, setProjects] = useProjects();

    return (
        <form className="bg-gradient-to-b from-cyan-400/5 to-blue-500/10 rounded-lg px-4 py-3 inline-block">
            {/* SUMMARY INPUT */}
            <label className="text-stone-100" htmlFor="summary">Summary</label><br />
            <input
                className="
                    bg-slate-400/10
                    text-stone-300
                    rounded-md p-1
                "
                type="text"
                id="summary"
                name="summary"
            /><br />
            <p className="text-stone-400">Provide a brief overview of your task. Ideally, 1-2 sentences.</p>

            <br />

            {/* TYPE INPUT */}
            <label className="text-stone-100" htmlFor="type">Type</label><br />

            <input
                className="w-3 h-3 bg-zinc-950"
                type="radio"
                id="type"
                name="type"
                value="FEAT"
            />
            <label className="text-stone-300 pl-1" htmlFor="type">
                Feature&nbsp;
                <p className="text-stone-400 inline">
                    - Feature request for an existing project.
                </p>
            </label><br />

            <input
                className="w-3 h-3 bg-zinc-950"
                type="radio"
                id="type"
                name="type"
                value="ISSU"
            />
            <label className="text-stone-300 pl-1" htmlFor="type">
                Issue&nbsp;
                <p className="text-stone-400 inline">
                    - Bug or issue with existing project.
                </p>
            </label><br />

            <input
                className="w-3 h-3 bg-zinc-950"
                type="radio"
                id="type"
                name="type"
                value="PROJ"
            />
            <label className="text-stone-300 pl-1" htmlFor="type">
                Project&nbsp;
                <p className="text-stone-400 inline">
                    - Idea for a new project.
                </p>
            </label><br />

            <input
                className="w-3 h-3 bg-zinc-950"
                type="radio"
                id="type"
                name="type"
                value="TASK"
            />
            <label className="text-stone-300 pl-1" htmlFor="type">
                Task&nbsp;
                <p className="text-stone-400 inline">
                    - Represents any task. Use this if you're unsure on the type.
                </p>
            </label><br />

            <br />

            {/* PROJECT INPUT */}
            <label className="text-stone-100" htmlFor="project">Project</label><br />
            <select name="project" id="project">
                {/* TODO: fetch and add projects as select options */}
            </select> <br />
            <p className="text-stone-400">The project that this task is connected to.</p>
            <p className="text-stone-400">
                If the task type is Project (meaning a new project), this value will be ignored.
            </p>
            <br />
            
            {/* DESCRIPTION INPUT */}
            <label className="text-stone-100" htmlFor="description">Description</label><br />
            <textarea
                className="
                    box-border resize
                    bg-slate-400/10
                    text-stone-300
                    rounded-md p-1
                "
                type="text"
                id="description"
                name="description"
            >
            </textarea><br />
        </form>
    );
};

export default SubmitTaskForm;