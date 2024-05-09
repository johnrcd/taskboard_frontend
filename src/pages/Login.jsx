import LoginForm from "../components/LoginForm";
import LoginContainer from "../containers/LoginContainer";

const Login = () => {
    return (
        <div className="bg-slate-900 min-h-screen flex justify-center">
            <div className="flex align-center flex-col justify-center">
                <LoginContainer />
            </div>
        </div>
    )
};

export default Login;