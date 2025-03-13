import React from 'react';
import styles from "./MainPage.module.css"

const MainPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <img className={styles.planeImg} src="https://wallpaperset.com/w/full/1/9/7/183261.jpg" alt="img" loading="lazy"/>
            <div className={styles.info}>
                <img
                    className={styles.logo}
                    src="src/assets/WOH2.png"
                    alt="logo"
                    width="300px"
                />
                <h1>Wings of Hope</h1>
                <h2>Discover Your Dream Destinations and Book Flights with Ease</h2>
            </div>
            <div className={styles.additionalInfo}>
                <h3>Who we are?</h3>
                <p>Wings of Hope is a premier online platform for booking flight tickets to your desired destinations. Whether you are planning a business trip or a vacation, Wings of Hope offers a seamless and convenient booking experience.</p>
                <p>With a wide range of flight options from trusted airlines, you can find the perfect itinerary that suits your travel preferences. Our user-friendly interface allows you to easily search for flights, compare prices, and choose the best options for your journey.</p>
                <p>At Wings of Hope, we prioritize customer satisfaction and aim to provide exceptional service. Our dedicated team is available 24/7 to assist you with any inquiries or concerns you may have during the booking process or throughout your travel.</p>
                <p>Experience the joy of exploring new destinations and creating unforgettable memories with Wings of Hope. Start your journey today!</p>
            </div>
        </div>
    );
}

export default MainPage;