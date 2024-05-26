import MainHeader from "../components/MainHeader";
import SubmitTaskForm from "../components/SubmitTaskForm";
import SubmitTaskContainer from "../containers/SubmitTaskContainer";

const SubmitTask = () => {
    return (
        <div className="bg-slate-900 min-h-screen flex justify-center">
            <div className="w-full max-w-7xl text-slate-200 ml-2 mr-2 mb-4">
                <MainHeader />
                <div className="flex justify-center flex-col">
                    <SubmitTaskContainer />
                </div>
            </div>
        </div>
    );
};

export default SubmitTask;