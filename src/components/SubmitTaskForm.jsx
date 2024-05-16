import { useState, useEffect } from 'react';
import { fetchFromApi } from "../util/api.js";
import { useProjects } from '../hooks/useProjects.js';

const SubmitTaskForm = ({onSubmitTaskHandler}) => {
    const projects = useProjects();
    const [characterCount, setCharacterCount] = useState(0);
    
    // NOTE: server uses max count of 4095 (for description)
    // but, I think that's weird so I made it a round number
    const maxCharacterCount = 4000;

    function handleSubmit(e) {
        e.preventDefault();
        // https://react.dev/reference/react-dom/components/select#reading-the-select-box-value-when-submitting-a-form
        const form = e.target;
        const formData = new FormData(form); // i did not know you could do this
        const data = {};

        formData.forEach((value, key) => data[key] = value); // love prototyping

        console.log(data);

        // TODO: submit task form handler
        // onSubmitTaskHandler(
        //     data.summary,
        //     data.type,
        //     data.project,
        //     data.description
        // );
    }

    function handleDescriptionOnKeyUp(e) {
        setCharacterCount(e.target.value.length);
    }
    return (
        <form className="bg-gradient-to-b from-cyan-400/5 to-blue-500/10 rounded-lg px-4 py-3 inline-block" onSubmit={handleSubmit}>
            {/* SUMMARY INPUT */}
            <label className="text-stone-100" htmlFor="summary">Summary</label><br />
            <input
                className="
                    bg-slate-400/10
                    text-stone-300
                    rounded-md p-1
                    w-full
                "
                type="text"
                id="summary"
                name="summary"
                maxLength={255}
            /><br />
            <p className="text-stone-400">Provide a brief overview of your task. Ideally, 1-2 sentences.</p>

            <br />

            {/* TYPE INPUT */}
            <label className="text-stone-100" htmlFor="type">Type</label><br />

            <input
                className="w-3 h-3 bg-zinc-950 "
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
            <select name="project" id="project" className="text-stone-300 bg-slate-900 text-sm">
                <option value="">None</option>
                {projects.length !== 0 &&
                    projects.map((project, index) => 
                        <option id={"project_" + index} value={project}>{project}</option>
                    )
                }
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
                    w-full
                "
                type="text"
                id="description"
                name="description"
                maxLength={4000}
                rows={5}
                placeholder="Provide a description of the task here..."
                onInput={handleDescriptionOnKeyUp}
            >
            </textarea>
            
            <br />  {/* my poor use of br tags will haunt me. but not today. */}

            <p className="text-stone-400">Remaining Characters: {maxCharacterCount - characterCount}</p>

            <br />
            <div className="flex justify-center">
                <button
                    className="
                        bg-cyan-800 hover:bg-cyan-700 
                        text-white font-bold
                        py-2 px-4
                        border-b-4 border-sky-900
                        hover:border-sky-800
                        rounded
                    "
                    type="submit"
                >
                    Submit Task
                </button>
            </div>
        </form>
    );
};

export default SubmitTaskForm;