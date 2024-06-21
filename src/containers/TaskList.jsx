import { useState, useEffect } from 'react';
import { fetchFromApi } from "../util/api.js";

import TaskOverview from '../components/TaskOverview.jsx';

const TaskList = ({onTaskClick, className}) => {
    const [tasks, setTasks] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // https://react.dev/reference/react/useEffect#fetching-data-with-effects
    useEffect(() => {
        let ignore = false;
        fetchFromApi("/api/tasks")
            .then(response => { return response.json(); })
            .then(data => {
                if (!ignore) {
                    setTasks(data);
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
            "flex flex-col space-y-2 bg-primary-border p-2"
        }>
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
        <p className="text-white text-normal font-normal m-0 p-0 line-clamp-1">
            Loading...
        </p>
        }
        </div>
    )
}

export default TaskList;