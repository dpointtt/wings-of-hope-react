import React from 'react';
import styles from "./PurchaseTicket.module.css";
import {useLocation, useNavigate} from 'react-router-dom';
import {purchaseTicket} from "../../api/DataService.ts";

const PurchaseTicket: React.FC = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const flight: Flight = location.state;

    const handleBack = () => {
        navigate('/flights');
    };

    const handleConfirm = async () => {

        let name: string = document.getElementById("fNameInput").value.toString()+" "+document.getElementById("sNameInput").value.toString();
        let email: string = document.getElementById("emailInput").value.toString();
        let gender: string = document.getElementById("genderInput").value.toString();

        try{
            const response = await purchaseTicket({
                name: name,
                email: email,
                gender: gender,
                flight: flight
            });
            console.log(response);
        }catch (error){
            console.error(error);
        }
        navigate('/success', {state:
                {
                    name: name,
                    email: email
                }
        });
    };

    return (
        <div className={styles.purchaseContainer}>
            <h1>Flight Information</h1>
            <h2>{flight.departure} to {flight.arrival}</h2>
            <h2>Who`s flying?</h2>
            <div className={styles.contactDetailsContainer}>
                <h3>Contact details</h3>
                <div className={styles.requiredText}>
                    <p className={styles.red}>*&nbsp;</p>
                    <p>Required</p>
                </div>
                <div className={styles.requiredLabel}>
                    <label htmlFor="emailInput">Contact email</label>
                    <p className={styles.red}>&nbsp;*</p>
                </div>
                <input type="text" id="emailInput" name="email" />
                <p style={{fontSize: "12px", marginLeft: "5px"}}>We`ll send your flight confirmation here</p>
                <div className={styles.requiredLabel} style={{marginTop: "20px"}}>
                    <label htmlFor="phoneInput">Phone number</label>
                    <p className={styles.red}>&nbsp;*</p>
                </div>
                <input type="text" id="phoneInput" name="phone" />
            </div>
            <div className={styles.contactDetailsContainer} style={{marginTop: "20px"}}>
                <h3>Adult 1</h3>
                <div className={styles.requiredText}>
                    <p className={styles.red}>*&nbsp;</p>
                    <p>Required</p>
                </div>
                <div className={styles.nameInput}>
                    <div className={styles.firstName}>
                        <div className={styles.requiredLabel}>
                            <label htmlFor="fNameInput">First name</label>
                            <p className={styles.red}>&nbsp;*</p>
                        </div>
                        <input type="text" id="fNameInput" name="fName" />
                        <p className={styles.underInput} style={{fontSize: "12px", marginLeft: "5px"}}>Enter exactly what`s written on this traveler`s travel document</p>
                    </div>
                    <div className={styles.firstName}>
                        <div className={styles.requiredLabel}>
                            <label htmlFor="sNameInput">Last name</label>
                            <p className={styles.red}>&nbsp;*</p>
                        </div>
                        <input type="text" id="sNameInput" name="sName" />
                        <p className={styles.underInput} style={{fontSize: "12px", marginLeft: "5px"}}>Enter exactly what`s written on this traveler`s travel document</p>
                    </div>
                </div>
                <div className={styles.personInfo}>
                    <div className={styles.firstName}>
                        <div className={styles.requiredLabel}>
                            <label htmlFor="genderInput">Gender specified on your document</label>
                            <p className={styles.red}>&nbsp;*</p>
                        </div>
                        <input type="text" id="genderInput" name="gender" />
                        <p className={styles.underInput} style={{fontSize: "12px", marginLeft: "5px"}}>We`re currently required by airlines and providers to ask for this information</p>
                    </div>
                    <div className={styles.firstName}>
                        <div className={styles.requiredLabel}>
                            <label htmlFor="dobInput">Date of birth</label>
                            <p className={styles.red}>&nbsp;*</p>
                        </div>
                        <input type="date" id="dobInput" name="dob" />
                    </div>
                </div>
                <div className={styles.personInfo}>
                    <div className={styles.firstName}>
                        <div className={styles.requiredLabel}>
                            <label htmlFor="documentInput">Travel document number</label>
                            <p className={styles.red}>&nbsp;*</p>
                        </div>
                        <input type="text" id="documentInput" name="document" />
                    </div>
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <div>
                    <button type={"button"} onClick={handleBack}>Back</button>
                </div>
                <div>
                    <button type={"button"} onClick={handleConfirm}>Confirm</button>
                </div>
            </div>
        </div>
    );
}

export default PurchaseTicket;