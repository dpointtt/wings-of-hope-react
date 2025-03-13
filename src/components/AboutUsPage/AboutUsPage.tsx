import React from 'react';
import styles from "./AboutUsPage.module.css"

const AboutUsPage: React.FC = () => {
    return (
        <div className={styles.aboutUs}>
            <h1>About Us</h1>
            <h2>Welcome to Wings of Hope</h2>
            <p>At Wings of Hope, we are dedicated to providing you with the best travel experience possible. We understand that flying is not just about reaching your destination, but also about the journey itself. With our commitment to excellence, we aim to make every flight memorable and enjoyable.</p>
            <p>Our team of experienced professionals is here to assist you in every step of your travel journey. From booking your tickets to ensuring your comfort on board, we prioritize your satisfaction and strive to meet your travel needs.</p>
            <p>With a wide selection of destinations and airlines, we offer flexibility and choice to cater to your preferences. Whether you are traveling for business or leisure, our user-friendly platform makes it easy to find and book your flights with confidence.</p>
            <p>At Wings of Hope, your safety is our top priority. We partner with reputable airlines and adhere to strict safety standards to provide you with a secure travel experience. Rest assured that your well-being is in good hands.</p>
            <p>Thank you for choosing Wings of Hope. We look forward to serving you and helping you create unforgettable travel memories.</p>
        </div>
    );
}

export default AboutUsPage;