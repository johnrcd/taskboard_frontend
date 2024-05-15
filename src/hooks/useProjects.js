import { useState, useEffect } from 'react';
import { fetchAsUser } from "../util/api";
import { getAccessToken } from '../util/auth';

/**
 * Returns a list of all the projects.
 */
export const useProjects = async () => {
    let projects;
    const options = {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": ("Bearer " + getAccessToken()),
        },
    }
    await fetchAsUser(
        "/api/projects/",
        options  
    )
        .then(response => response.json())
        .then(data => projects = data)

    return projects;
};