import { useState } from 'react';
import { useProjects } from '../hooks/useProjects.js';

const EditProfileForm = ({onSubmitHandler}) => {
    const aboutMeCharacterCap = 250;

    function handleSubmit(e) {
        e.preventDefault();
        // https://react.dev/reference/react-dom/components/select#reading-the-select-box-value-when-submitting-a-form
        const form = e.target;
        const formData = new FormData(form); // i did not know you could do this
        const data = {};

        formData.forEach((value, key) => data[key] = value); // love prototyping

        console.log(data);

        onSubmitHandler(
            // data.summary,
            // data.description,
            // data.project,
            // data.type
        );
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
                // onInput={handleDescriptionOnKeyUp}
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
        </form>
    );
};

export default EditProfileForm;