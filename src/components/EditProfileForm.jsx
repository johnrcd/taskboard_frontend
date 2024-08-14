import { useState, useEffect } from 'react';
import { useProjects } from '../hooks/useProjects.js';
import { useProfiles } from "../hooks/useProfiles";
import { fetchFromApi } from '../util/api.js';
import { useNavigate } from 'react-router';

const EditProfileForm = ({username, onSubmitHandler}) => {
    const navigate = useNavigate();
    const [userProfile, setUserProfile] = useState({});
    const aboutMeCharacterCap = 250;    

    useEffect(() => {
        const getUserProfile = async () => {
            await fetchFromApi(
                "/api/profiles/" + username + "/"
            )
                .then(response => response.json())
                .then((data) => setUserProfile(data))
        };
        getUserProfile();
    }, [username]);

    function handleSubmit(e) {
        e.preventDefault();
        // https://react.dev/reference/react-dom/components/select#reading-the-select-box-value-when-submitting-a-form
        const form = e.target;
        const formData = new FormData(form); // i did not know you could do this
        const data = {};

        formData.forEach((value, key) => data[key] = value); // love prototyping


        onSubmitHandler(data);
    }

    return (
        <form className="text-primary-text" onSubmit={handleSubmit}>
            <h2 className="text-2xl text-center font-bold">Edit Profile</h2>
            
            {/* name input */}
            <label className="block font-bold" htmlFor="name">Name</label>
            <input
                className="form-input-text"
                type="text"
                id="name"
                name="name"
                maxLength={100}
                required
                defaultValue={userProfile.name}
            /><br />
            <p className="text-primary-tooltip">Your display name.</p>

            <br />

            {/* TYPE INPUT */}
            <label className="block font-bold" htmlFor="title">Title</label>
            <input
                className="form-input-text"
                type="text"
                id="title"
                name="title"
                maxLength={100}
                defaultValue={userProfile.title}
            /><br />
            <p className="text-primary-tooltip">Your title.</p>

            <br />

            <label className="block font-bold" htmlFor="about_me">About You</label>
            <textarea
                className="form-input-text"
                type="text"
                id="about_me"
                name="about_me"
                maxLength={aboutMeCharacterCap}
                rows={5}
                placeholder="Share a little about yourself..."
                defaultValue={userProfile.about_me}
            >
            </textarea>

            <br />

            <div className="flex justify-center">
                <button
                    className="form-button-submit"
                    type="submit"
                >
                    Confirm Changes
                </button>
            </div>
            <div className="flex justify-center">
                <button
                    className="hover:underline hover:text-primary-accent text-center block font-bold"
                    type="button"
                    onClick={() => { navigate("/profile/"); }}
                >
                    Back to Profile
                </button>
            </div>
        </form>
    );
};

export default EditProfileForm;