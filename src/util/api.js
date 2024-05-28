import { getAccessToken } from "./auth";
// swap root_url depending on where the REST API is being hosted

// export const root_url = "http://127.0.0.1:8000"
const root_url = "https://johnrcd.pythonanywhere.com"

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
 * header is set, it will be overriden. This must be set.
 * @returns Response from fetch.
 */
export const fetchAsUser = async(path, options) => {
    if (options === null || options === undefined) {
        throw Error("Parameter \"options\" in function fetchAsUser cannot be null or undefined.")
    }
    options["headers"]["Authorization"] = 'Bearer ' + getAccessToken();
    return fetch(root_url + path, options);
}