import React from 'react';
import {useNavigate} from 'react-router-dom'

const MainPage = () => {
    let navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault()
        await fetch('/', {
            body: new FormData(event.target),
            method: 'post'
        })
        navigate('/notification', {
            state: {
                icon: 'icon--mail',
                title: 'Check your mail',
                text: 'We\'ve sent a password recover instructions to your email. If this email is associated with an Unplugged account, check it.',
                message: true
            }
        });
    }
    return (
        <>
            <form className="main__form" onSubmit={handleSubmit}>
                <h2>Password recovery</h2>
                <p>Enter the email address associated with your account and we'll send you a link to reset your
                    password.</p>
                <input type="email" className="input__text" id="email" placeholder="Your email" required
                       pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$"/>
                <input type="submit" className="input__submit"/>
            </form>
            <small><a href="https://support.unplugged.com/en/articles/4354-step-2-how-to-subscribe-to-the-up-suite">Don't
                have an account?</a></small>
        </>
    )
};

export default MainPage;
