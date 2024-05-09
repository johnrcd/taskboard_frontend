// swap root_url depending on where the REST API is being hosted

export const root_url = "http://127.0.0.1:8000"
// const root_url = "https://johnrcd.pythonanywhere.com"

/**
 * Wrapper for fetch request.
 * @param {string} path The API endpoint you are trying to access. Expects
 * a leading slash. (e.g. /api/tasks/ )
 * @param {*} options Options for fetch request. If this is null, fetch will
 * be treated as a get request.
 * @returns {Promise<Response>} Response from fetch.
 */
export const fetchFromApi = async(path, options) => {
    if (options === null) {
        options = {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        };
    }
    return await fetch(root_url + path, options);
}

/**
 * Adds credentials to the options in a fetch request.
 * @param {string} path The API endpoint you are trying to access. Do not put
 * in the domain. This string should not start with a slash.
 * @param {object} options Options for fetch request. If the Authorization
 * header is set, it will be overriden.
 * @returns Response from fetch.
 */
const fetchAsUser = async(path, options) => {
    const credentials = localStorage.getItem("credentials_base64");
    options["headers"]["Authorization"] = 'Basic ' + credentials
    return fetch(root_url + path, options);
}

const displayLoginStatus = () => {
    const username = localStorage.getItem("username");

    if (username === null || username === "" || username === "null") {
        const login_overview = document.getElementById("login_overview");
        login_overview.style.display = "none";
    }

    const login_status_element = document.getElementById("login_status");
    const message = "You are logged in as: " + username + ".";
    login_status_element.textContent = message;
}

const connectToLogoutButton = () => {
    const logout_button = document.getElementById("logout_button");
    logout_button.addEventListener(
        "click",
        logout
    );
}

const logout = () => {
    localStorage.setItem("credentials_base64", null);
    localStorage.setItem("username", null);
    
    location.reload(true);
}