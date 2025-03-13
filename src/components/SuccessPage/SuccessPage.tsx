import React from 'react';
import styles from "./SuccessPage.module.css";
import {useLocation, useNavigate} from 'react-router-dom';

type Client = {
    name: string,
    email: string
};

const SuccessPage: React.FC = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const client: Client = location.state;

    const handleHome = () => {
        navigate('/');
    };

    return (
        <div className={styles.successContainer}>
            <h1>Success</h1>
            <h2>We are gonna send confirmation on your {client.email} email!</h2>
            <h2>You also can ask for all your ticket on My Tickets page by your email.</h2>
            <button type={"button"} onClick={handleHome}>Go to home</button>
        </div>
    );
}

export default SuccessPage;