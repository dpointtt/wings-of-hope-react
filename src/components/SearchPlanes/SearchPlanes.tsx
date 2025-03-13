import React, {useEffect, useState} from 'react';
import styles from "./SearchPlanes.module.css";
import City from "../City/City.tsx";
import {getFlights, searchFlights} from "../../api/DataService.ts";
import { Modal } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SearchPlanes: React.FC = () => {
    const [country, setCountry] = useState<string>('');
    const [flights, setFlights] = useState<Flight[] | undefined>();
    const [arrival, setArrival] = useState('');
    const [departure, setDeparture] = useState('');
    const [open, setOpen] = React.useState(false);
    const [selectedFlight, setSelectedFlight] = React.useState<Flight | undefined>(undefined);

    const navigate = useNavigate();

    const handleOpen = (flight: Flight) => {
        setSelectedFlight(flight);
        setOpen(true);
    };

    const handleClose = () => {
        setSelectedFlight(undefined);
        setOpen(false);
    };

    const handleSelect = () => {
        // todo:
        setOpen(false);
        navigate('/purchase', {state: selectedFlight});
    };

    const handleArrivalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setArrival(event.target.value);
    };

    const handleDepartureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDeparture(event.target.value);
    };

    const handleData = async () => {
        setFlights(undefined);
        try {
            // const response = await searchFlights(
            //     {
            //         departure: departure,
            //         arrival: arrival,
            //         departureDate: document.getElementById("departureDateInput").value.toString(),
            //         arrivalDate: document.getElementById("arrivalDateInput").value.toString()
            //     });
            const response = await getFlights();
            setFlights(response as Flight[] | undefined);
        } catch (error){
            console.error(error);
        }
    };



    useEffect(() => {
        fetch('https://ipapi.co/json/')
            .then(response => response.json())
            .then(data => {
                const userCountry = data.country_name;
                setCountry(userCountry);
            })
            .catch(error => {
                console.error('Error fetching user country:', error);
            });
    }, []);

    return (
        <>
            <Modal open={open} onClose={handleClose} style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <div className={styles.modalContainer}>
                    <h2>Your flight to {selectedFlight?.arrival}</h2>
                    <h3>Flight to {selectedFlight?.arrival}</h3>
                    <p>Direct &#183; {selectedFlight?.duration}</p>
                    <div className={styles.modalFlight}>
                        <div className={styles.modalLine}>
                            <div>&bull;</div>
                            <div className={styles.vl2}></div>
                            <div>&bull;</div>
                        </div>
                        <div className={styles.modalLine2}>
                            <div>
                                <p>{selectedFlight?.departureDate} &#183; {selectedFlight?.departureTime}</p>
                                <p><b>{selectedFlight?.departureAbr} &#183; {selectedFlight?.departure}</b></p>
                            </div>
                            <div className={styles.arrivalModal}>
                                <p>{selectedFlight?.arrivalDate} &#183; {selectedFlight?.arrivalTime}</p>
                                <p><b>{selectedFlight?.arrivalAbr} &#183; {selectedFlight?.arrival}</b></p>
                            </div>
                        </div>
                    </div>
                    <h3>{selectedFlight?.cost}$</h3>
                    <p style={{fontSize: "12px"}}>Total price for all travelers</p>
                    <hr className={styles.modalHr}/>
                    <div className={styles.modalButton}>
                        <button onClick={handleSelect}>Select</button>
                    </div>
                </div>
            </Modal>
            <div className={styles.container}>
                <h1>Compare and book flights with ease</h1>
                <h2>Discover your next dream destination</h2>
                <div className={styles.checkBoxContainer}>
                    <div>
                        <input type="radio" id="typeChoice1" name="type" value="type" disabled={true} />
                        <label htmlFor="typeChoice1">Round-trip</label>
                    </div>

                    <div>
                        <input type="radio" id="typeChoice2" name="type" value="type" checked={true} />
                        <label htmlFor="typeChoice2">One-way</label>
                    </div>

                    <div>
                        <input type="radio" id="typeChoice3" name="type" value="type" disabled={true} />
                        <label htmlFor="typeChoice3">Multi-city</label>
                    </div>

                    <select name="seat" id="seats">
                        <option value="Economy">Economy</option>
                    </select>

                    <select name="count" id="count">
                        <option value="1 adult">1 adult</option>
                    </select>

                    <div>
                        <input type="checkbox" id="directChoice" name="direct" value="direct" checked={true} disabled={true} />
                        <label htmlFor="directChoice">Direct flights only</label>
                    </div>
                </div>
                <div className={styles.inputPanel}>
                    <input type="text" placeholder="Where from?" value={departure} onChange={handleDepartureChange}/>
                    <input type="text" placeholder="Where to?" value={arrival} onChange={handleArrivalChange}/>
                    <input
                        type="date"
                        id="departureDateInput"
                        min="0001-01-01"
                        max="9999-12-31"
                        step="1"
                    />
                    <input
                        type="date"
                        id="arrivalDateInput"
                        min="0001-01-01"
                        max="9999-12-31"
                        step="1"
                    />
                    <button type={"button"} onClick={handleData}>Search</button>
                </div>
            </div>
            {flights !== undefined && (
                <div className={styles.flightContainer}>
                    {flights.map((flight: Flight) => (
                            <div key={flight.flightId} className={styles.flight}>
                                <div className={styles.flightMain}>
                                    <div>
                                        <p>{flight.departureTime}</p>
                                        <p style={{fontSize: "12px"}}>{flight.departureAbr} &#183; {flight.departureDate}</p>
                                    </div>
                                    <div className={styles.timeline}>
                                        <p className={styles.lineText}>{flight.duration}</p>
                                        <hr className={styles.line}/>
                                        <p className={styles.lineText}>Direct</p>
                                    </div>
                                    <div>
                                        <p>{flight.arrivalTime}</p>
                                        <p style={{fontSize: "12px"}}>{flight.arrivalAbr} &#183; {flight.arrivalDate}</p>
                                    </div>
                                </div>
                                <div className={styles.vl}></div>
                                <div className={styles.flightButtonContainer}>
                                    <div className={styles.flightButtonContent}>
                                        <p className={styles.includedText}><b>Included: personal item</b></p>
                                        <p><b>{flight.cost}$</b></p>
                                        <p className={styles.includedText}>Total price for all travelers</p>
                                        <button className={styles.flightButton} onClick={() => handleOpen(flight)}>See flight</button>
                                    </div>
                                </div>
                            </div>
                    ))}
                </div>
            )}
            {flights == undefined &&
            <div className={styles.container2}>
                <h1>Trending cities</h1>
                <h2>Book flights to a destination popular with travelers from {country}</h2>
                <div className={styles.cities}>
                    <City></City>
                    <City></City>
                    <City></City>
                </div>
            </div>
            }
        </>
    );
}

export default SearchPlanes;