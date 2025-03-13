import React from 'react';
import styles from "./QaPage.module.css";

const QaPage: React.FC = () => {
    return (
        <div className={styles.qaSection}>
            <h1>Questions & Answers</h1>

            <div className={styles.qaSection2}>
                <div className={styles.qa}>
                    <h2>Q: How do I book a flight?</h2>
                    <p>A: To book a flight, you can visit our website and follow the simple steps outlined on our booking page. Select your departure and destination, choose your travel dates, and proceed with the payment.</p>
                </div>

                <div className={styles.qa}>
                    <h2>Q: What is the baggage allowance?</h2>
                    <p>A: The baggage allowance may vary depending on the airline and ticket type. Generally, it includes a certain number of checked bags and carry-on luggage. You can find specific information regarding baggage allowance during the booking process or by contacting our customer support.</p>
                </div>

                <div className={styles.qa}>
                    <h2>Q: Can I make changes to my flight booking?</h2>
                    <p>A: Yes, you can usually make changes to your flight booking depending on the fare rules and availability. However, please note that there may be change fees or fare differences involved. It's best to review the terms and conditions of your ticket or contact our customer support for assistance.</p>
                </div>

                <div className={styles.qa}>
                    <h2>Q: What travel documents do I need to bring?</h2>
                    <p>A: You will typically need a valid passport or other government-issued identification for domestic flights. For international travel, you may require a passport, visa, or other entry requirements depending on your destination. It's important to check the travel document requirements well in advance of your trip.</p>
                </div>

                <div className={styles.qa}>
                    <h2>Q: Can I choose my seat in advance?</h2>
                    <p>A: Yes, many airlines allow passengers to select seats in advance during the booking process or through the airline's website or mobile app. Some airlines may charge an additional fee for preferred or extra legroom seats. Seat availability may vary, so it's recommended to book early for better seat selection.</p>
                </div>

                <div className={styles.qa}>
                    <h2>Q: What happens if my flight is delayed or canceled?</h2>
                    <p>A: In the event of a flight delay or cancellation, the airline is responsible for providing assistance and rebooking options. You may be eligible for compensation or alternative flights depending on the circumstances. It's advised to contact the airline's customer support or check their policies for specific information on delay and cancellation situations.</p>
                </div>

                <div className={styles.qa}>
                    <h2>Q: Are there any additional fees or charges?</h2>
                    <p>A: Additional fees or charges may apply depending on the airline and specific services or options you choose. Common examples include baggage fees, seat selection fees, in-flight meals, and Wi-Fi charges. It's important to review the fare details and any additional charges before confirming your booking.</p>
                </div>

                <div className={styles.qa}>
                    <h2>Q: What if I miss my flight?</h2>
                    <p>A: If you miss your flight, it's essential to contact the airline as soon as possible. Depending on the fare rules, you may be able to rebook for a later flight, but there may be associated fees or fare differences. Keep in mind that some tickets may have strict no-show policies, so it's crucial to be aware of the terms and conditions of your ticket.</p>
                </div>

                <div className={styles.qa}>
                    <h2>Q: Can I request special assistance for my travel?</h2>
                    <p>A: Yes, if you require special assistance such as wheelchair access, dietary requirements, or medical needs, it's recommended to contact the airline or our customer support in advance. They can provide information on the available services and ensure your travel requirements are accommodated to the best of their ability.</p>
                </div>

                <div className={styles.qa}>
                    <h2>Q: What is the process for online check-in?</h2>
                    <p>A: Online check-in allows you to check-in for your flight in advance through the airline's website or mobile app. You can typically select your seat, enter passport details, and receive your boarding pass electronically. Online check-in saves time at the airport, and you can often choose to have a digital or printed copy of your boarding pass.</p>
                </div>
            </div>

            {/* Add more Q&A sections here */}
        </div>
    );
}

export default QaPage;