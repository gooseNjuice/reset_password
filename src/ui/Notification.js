import React from 'react';
import {useLocation} from "react-router-dom";

const Notification = () => {
    const location = useLocation();
    const {icon, title, text, message} = location.state
    return (<>
        <form className="main__form">
            <div className={`icon ${icon}`}/>
            <h2>{title}</h2>
            <p className="small">{text}</p>
        </form>
        {message && (<small>Did not receive the email? Check your spam folder, or <a href="#">try another email
            address</a></small>)}
    </>)
};

export default Notification;
