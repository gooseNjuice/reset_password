import React, {useRef} from 'react';
import {useNavigate} from "react-router-dom";

const NewPassword = () => {
    const ref = useRef(null);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault()
        const form = new FormData()
        form.append('password', event.target[0].value)
        if (event.target[0].value !== event.target[1].value) {
            event.target[1].setCustomValidity('The passwords do not match')

        } else {

            // await fetch('/', {
            //     body: document.getElementById('password1').value,
            //     method: 'post'
            // })
            navigate('/notification', {
                state: {
                    icon: 'icon--confirmation',
                    title: 'Thank you',
                    text: 'Your password was updated successfully.',
                    message: false
                }
            });
        }
    }
    return (
        <form className="main__form" onSubmit={handleSubmit} id="form" name="form" method="post">
            <h2>Choose new password</h2>
            <p className="bottom-0">A strong and safe password should comply with the following rules:</p>
            <ul className="small left-0">
                <li>
                    Contains at least 8 characters
                </li>
                <li>
                    Contains both uppercase and lowercase letters
                </li>
                <li>
                    Contains both letters and numbers
                </li>
                <li>
                    Include at least one special character, e.g., ! @ # ? ]
                </li>
            </ul>
            <input type="password" className="input__text" name="password1" id="password1"
                   placeholder="Please type new password"
                   pattern='^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$'
                   minLength={8}
                   required/>
            <input type="password" className="input__text" name="password2" id="password2"
                   placeholder="Confirm new password" required ref={ref}
                   onChange={(e) => e.target.setCustomValidity('')}/>

            <input type="submit" className="input__submit"/>
        </form>
    )
}
export default NewPassword;
