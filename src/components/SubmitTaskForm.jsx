import { useState } from 'react';
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

        onSubmitTaskHandler(
            data.summary,
            data.description,
            data.project,
            data.type
        );
    }

    function handleDescriptionOnKeyUp(e) {
        setCharacterCount(e.target.value.length);
    }
    return (
        <form className="text-primary-text" onSubmit={handleSubmit}>
            <h2 className="text-2xl text-center font-bold">Submit a Task</h2>
            
            {/* SUMMARY INPUT */}
            <label className="block font-bold" htmlFor="summary">Summary</label>
            <input
                className="
                    box-border resize
                    bg-note-background
                    border-2
                    border-note-border
                    text-note-text
                    placeholder-note-tooltip
                    p-1
                    w-full
                    rounded
                "
                type="text"
                id="summary"
                name="summary"
                maxLength={255}
                required
            /><br />
            <p className="text-primary-tooltip">Provide a brief overview of your task. Ideally, 1-2 sentences.</p>

            <br />

            {/* TYPE INPUT */}
            <label className="block font-bold" htmlFor="type">Type</label>

            <input
                className="w-3 h-3 bg-zinc-950 "
                type="radio"
                id="type"
                name="type"
                value="FEAT"
            />
            <label className="pl-1" htmlFor="type">
                Feature&nbsp;
                <p className="text-primary-tooltip inline">
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
            <label className="pl-1" htmlFor="type">
                Issue&nbsp;
                <p className="text-primary-tooltip inline">
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
            <label className="pl-1" htmlFor="type">
                Project&nbsp;
                <p className="text-primary-tooltip inline">
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
            <label className="pl-1" htmlFor="type">
                Task&nbsp;
                <p className="text-primary-tooltip inline">
                    - Represents any task. Use this if you're unsure on the type.
                </p>
            </label><br />

            <br />

            {/* PROJECT INPUT */}
            <label className="block font-bold" htmlFor="project">Project</label>
            <select name="project" id="project" className="
                box-border resize
                bg-note-background
                border-2
                border-note-border
                text-note-text
                placeholder-note-tooltip
                p-1
                w-full
                rounded
            ">
                <option value="">None</option>
                {projects.length !== 0 &&
                    projects.map((project, index) => 
                        <option id={"project_" + index} value={project}>{project}</option>
                    )
                }
            </select> <br />
            <p className="text-primary-tooltip">The project that this task is connected to.</p>
            <p className="text-primary-tooltip">
                If the task type is Project (meaning a new project), this value will be ignored.
            </p>
            <br />
            
            {/* DESCRIPTION INPUT */}
            <label className="block font-bold" htmlFor="description">Description</label>
            <textarea
                className="
                    box-border resize
                    bg-note-background
                    border-2
                    border-note-border
                    text-note-text
                    placeholder-note-tooltip
                    p-1
                    w-full
                    rounded
                "
                type="text"
                id="description"
                name="description"
                maxLength={maxCharacterCount}
                rows={5}
                placeholder="Provide a description of the task here..."
                onInput={handleDescriptionOnKeyUp}
                required
            >
            </textarea>

            <p className="text-primary-tooltip">Remaining Characters: {maxCharacterCount - characterCount}</p>

            <div className="flex justify-center">
                <button
                    className="
                        bg-offset-background hover:bg-note-border
                        text-offset-text font-bold
                        m-4 py-2 px-4
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