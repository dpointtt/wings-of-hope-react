import React from 'react';
import styles from "./City.module.css";

const City: React.FC = () => {
    return (
        <div className={styles.panel}>
            <img src="https://www.poland.travel/images/en-EN/Trending/Warszafka1170.jpg" alt="city"/>
            <h3>Warsaw, Poland</h3>
            <p>Flights from Igor Sikorsky Kyiv International Airport</p>
            <p>Jun 10 - Jun 17 &#x2022; Round trip</p>
        </div>
    );
}

export default City;