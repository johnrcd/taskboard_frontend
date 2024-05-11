// https://stackoverflow.com/a/68777827

import { Navigate } from "react-router";
import { useLoginStatus } from "../hooks/useLoginStatus";

/**
 * Redirects to the login page if the user is not logged in.
 * 
 * @param {Component} component The component that needs authentication.
 * @returns {Component}
 */
const PrivateRoute = ({ component }) => {
    const isAuthenticated = useLoginStatus();
 
    return isAuthenticated ? component : <Navigate to="/login" />;
};

export default PrivateRoute;