import { useEffect } from "react";
import { useNavigate } from "react-router";
import { setAccessToken, setUsername } from "../util/auth";

const Logout = () => {
    const navigate = useNavigate();
    setAccessToken("");
    setUsername("");

    useEffect(() => {
        navigate("/");
    }, []);
    return <p>Loading...</p>;
};

export default Logout;