import LoginForm from "../components/LoginForm";
import LoginContainer from "../containers/LoginContainer";
import RegisterContainer from "../containers/RegisterContainer";

const Register = () => {
    return (
        <div className="bg-slate-900 min-h-screen flex justify-center">
            <div className="flex align-center flex-col justify-center">
                <RegisterContainer />
            </div>
        </div>
    )
};

export default Register;