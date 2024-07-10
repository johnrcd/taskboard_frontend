import { useState, useEffect } from 'react';
import { fetchAsUser, fetchFromApi } from "../util/api";

/**
 * Returns a list of notifications.
 */
export const useNotifications = (username) => {
    const [notifications, setNotifications] = useState([]);

    const options = {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    }

    useEffect(() => {
        const fetchNotifications = async() => {
            await fetchFromApi("/api/notifications/" + username + "")
                .then(response => { return response.json(); })
                .then(data => { setNotifications(data); })
        };
        fetchNotifications();
        return;
    }, [])

    return notifications;
};