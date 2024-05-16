import { useState, useEffect } from 'react';
import { fetchAsUser } from "../util/api";
import { getAccessToken } from '../util/auth';

/**
 * Returns a list of all the projects.
 */
export const useProjects = () => {
    const [projects, setProjects] = useState([]);

    const options = {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": ("Bearer " + getAccessToken()),
        },
    }

    useEffect(() => {
        const fetchProjects = async() => {
            await fetchAsUser(
                "/api/projects/",
                options  
            )
                .then(response => { return response.json(); })
                .then(data => { setProjects(data); })
        };
        fetchProjects();
        return;
    }, [])

    return projects;
};