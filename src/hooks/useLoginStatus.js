import { useState, useEffect } from 'react';
import { fetchAsUser } from "../util/api";
import { getAccessToken } from '../util/auth';

/**
 * Returns true or false is the user is logged in.
 * 
 * Login status is determined using the current access token.
 */
export const useLoginStatus = async () => {
    let isAuthenticated;
    const options = {
        method: "GET",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": ("Bearer " + getAccessToken()),
        },
    }
    await fetchAsUser(
        "/api/user/status/",
        options  
    )
        .then(response => {
            isAuthenticated = response.ok
        })

    return isAuthenticated;
};