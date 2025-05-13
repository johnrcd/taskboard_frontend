import { useState, useEffect } from 'react';
import { fetchFromApi } from "../util/api.js";

import TaskOverview from '../components/TaskOverview.jsx';

const TaskList = ({onTaskClick, className}) => {
    const [tasks, setTasks] = useState([]);
    const [taskTypes, setTaskTypes] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // https://react.dev/reference/react/useEffect#fetching-data-with-effects
    useEffect(() => {
        let ignore = false;
        fetchFromApi("/api/tasks/")
            .then(response => { return response.json(); })
            .then(data => {
                if (!ignore) {
                    setTasks(data);
                }
            });
        fetchFromApi("/api/tasks/status/")
            .then(response => response.json())
            .then(data => {
                if (!ignore) {
                    setTaskTypes(data);
                    setIsLoaded(true);
                }
            });

        return () => {
            ignore = true;
        };
    }, []);

    return (
        <div className={
            className + " " +
            "flex flex-col space-y-[1px] bg-primary-border p-[1px]"
        }>
            {/* i don't have the brainpower to implement this atm */}
            {/* <form>
                <details>
                    <summary>Filter by Status</summary>
                    {taskTypes.length !== 0 &&
                        taskTypes.map((status, index) => 
                            <>
                                <input
                                    className="
                                        inline
                                    "
                                    type="checkbox"
                                    id={status}
                                    name={status}
                                    value={status}
                                />
                                <p className="
                                    inline
                                ">
                                    {status[1]}
                                </p>
                                <br/>
                            </>
                        )
                    }
                </details>
            </form> */}
            {isLoaded &&
                tasks.map((task, index) =>
                    <TaskOverview
                        uuid={task.uuid}
                        summary={task.summary}
                        onTaskClick={(uuid) => onTaskClick(uuid)}
                        key={"TaskList_task_" + index}
                    />
                )
            }
            {!isLoaded && 
                <p className="
                    text-primary-text text-normal font-normal
                    m-0 p-0 line-clamp-1
                ">
                    Loading...
                </p>
            }
        </div>
    )
}

export default TaskList;
