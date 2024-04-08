import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import TaskList from "../containers/TaskList";
import TaskOverview from "../components/TaskOverview";

const Tasks = () => {
    return(
        <div className="bg-slate-900 min-h-screen">
            <MainHeader />
            <TaskList />
            <TaskOverview />
            <MainFooter />
        </div>
    )
};

export default Tasks;