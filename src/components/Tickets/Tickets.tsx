import React, {useState} from 'react';
import styles from "./Tickets.module.css";
import {getClientTickets} from "../../api/DataService.ts";

const Tickets: React.FC = () => {
    const [tickets, setTickets] = useState<Ticket[] | undefined>(undefined)
    const handleTickets = async () => {
        setTickets(undefined);
        try{
            const response = await getClientTickets(
                {email: document.getElementById("emailInput").value.toString()}
            );
            setTickets(response as Ticket[] | undefined);
        }catch (error){
            console.log(error);
        }
    };

    return (
        <div className={styles.ticketsContainer}>
            <h1>My Tickets</h1>
            <h2>Check which tickets you have already booked by email</h2>
            <div className={styles.emailInputGroup}>
                <input type="text" placeholder="Email" id={"emailInput"}/>
                <button type={"button"} onClick={handleTickets}>Check!</button>
            </div>
            {tickets !== undefined &&
                <div className={styles.ticketsContainer}>
                    {tickets.map((ticket: Ticket) => (
                        <div className={styles.ticketBox}>
                            <div className={styles.ticketInfo}>
                                <p>Code: {ticket.code}</p>
                                <h3>{ticket.flight.departure} - {ticket.flight.arrival}</h3>
                                <p>{ticket.flight.departureDate}, {ticket.flight.departureTime} - {ticket.flight.arrivalDate}, {ticket.flight.arrivalTime}</p>
                            </div>
                            <div className={styles.ticketButtons}>
                                <button>Send to email</button>
                                <button>Open</button>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </div>
    );
}

export default Tickets;