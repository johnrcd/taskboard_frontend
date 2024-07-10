import { getAccessToken } from "./auth";

// root_url is swapped depending on what backend i'm using (prod vs local)

// q: wouldn't it be better to use enviornmental variables when running
//    locally rather than changing a variable that keeps getting committed to
//    the repo
// a: yeah probably

// q: why is one of the urls exported but the other isn't
// a: idk i forgot

export const root_url = "http://127.0.0.1:8000"
// const root_url = "https://johnrcd.pythonanywhere.com"

/**
 * Wrapper for fetch request.
 * @param {string} path The API endpoint you are trying to access. Expects
 * a leading slash. (e.g. /api/tasks/)
 * @param {object} options Options for fetch request. If this is null, fetch
 * will be treated as a get request.
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
 * @param {string} path The API endpoint you are trying to access. Expects
 * a leading slash. (e.g. /api/tasks/)
 * @param {object} options Options for fetch request. If the Authorization
 * header is set, it will be overridden. This must be set.
 * @returns Response from fetch.
 */
export const fetchAsUser = async(path, options) => {
    if (options === null || options === undefined) {
        throw Error("Parameter \"options\" in function fetchAsUser cannot be null or undefined.")
    }
    options["headers"]["Authorization"] = 'Bearer ' + getAccessToken();
    return fetch(root_url + path, options);
}