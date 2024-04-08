import { useState, useEffect } from 'react';
import { fetchFromApi } from "../util/api.js";

import TaskOverview from '../components/TaskOverview.jsx';


/**
 * Exports the latest tasks.
 */
const TaskList = ({onTaskClick}) => {
    const [tasks, setTasks] = useState([]);

    // https://react.dev/reference/react/useEffect#fetching-data-with-effects
    useEffect(() => {
        let ignore = false;
        fetchFromApi("/api/tasks")
            .then(response => { return response.json(); })
            .then(data => {
                if (!ignore) {
                    setTasks(data);
                }
            });

        return () => {
            ignore = true;
        };
    }, []);

    return (
        <div>
        {
            tasks.map((task, index) =>
                <TaskOverview
                    uuid={task.uuid}
                    summary={task.summary}
                    onTaskClick={(uuid) => onTaskClick(uuid)}
                    key={"TaskList_task_" + index}
                />
            )
        }
        </div>
    )
}

export default TaskList;