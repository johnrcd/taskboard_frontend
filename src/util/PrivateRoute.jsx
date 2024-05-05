// https://stackoverflow.com/a/68777827

import { Navigate } from "react-router";

/**
 * Redirects to the login page if the user is not logged in.
 * 
 * @param {Component} component The component that needs authentication.
 * @returns {Component}
 */
const PrivateRoute = ({ component }) => {
    // TODO: authentication logic
    
    // NOTE: useState was causing infinite re-rendering
    //       not sure why because i'm an idiot
    const isAuthenticated = false;
 
    return isAuthenticated ? component : <Navigate to="/login" />;
};

export default PrivateRoute;