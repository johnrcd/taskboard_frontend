import MainHeader from "../components/MainHeader";
import SubmitTaskForm from "../components/SubmitTaskForm";

const SubmitTask = () => {
    return (
        <div className="bg-slate-900 min-h-screen flex justify-center">
            <div className="flex align-center flex-col">
                <MainHeader />
                <div className="flex justify-center flex-col">
                    <SubmitTaskForm />
                </div>
            </div>
        </div>
    );
};

export default SubmitTask;