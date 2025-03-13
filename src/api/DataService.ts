import axios from "axios";

const API_URL = "http://localhost:8080/api/v1"
const FLIGHTS = "/flight"
const SEARCH_FLIGHTS = FLIGHTS + "/search"
const TICKETS = "/client/tickets"
const PURCHASE = "/client/purchase"

export async function getFlights(){
    try {
        const response = await axios.get<ResponseData<Flight>>(
            API_URL+FLIGHTS,
            {
                headers: {
                    Accept: 'application/json',
                },
            },
        );
        const flights: Flight[] = response.data.data.flights;
        return flights.map((flight: Flight) => {
            const convertedDepartureTime = convertTimeToAmerican(flight.departureTime);
            const convertedDepartureDate = convertDateToAbbreviatedFormat(flight.departureDate);
            const convertedArrivalTime = convertTimeToAmerican(flight.arrivalTime);
            const convertedArrivalDate = convertDateToAbbreviatedFormat(flight.arrivalDate);
            const convertedDuration = convertDurationToTime(flight.duration);

            return {
                ...flight,
                departureTime: convertedDepartureTime,
                departureDate: convertedDepartureDate,
                arrivalTime: convertedArrivalTime,
                arrivalDate: convertedArrivalDate,
                duration: convertedDuration,
            };
        });
    } catch (error){
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return;
        } else {
            console.log('unexpected error: ', error);
            return;
        }
    }
}

export async function searchFlights(request: FlightRequest){
    try {
        const response = await axios.post<ResponseData<Flight>>(
            API_URL+SEARCH_FLIGHTS,
            request,
            {
                headers: {
                    Accept: 'application/json',
                },
            },
        );
        const flights: Flight[] = response.data.data.flights;
        return flights.map((flight: Flight) => {
            const convertedDepartureTime = convertTimeToAmerican(flight.departureTime);
            const convertedDepartureDate = convertDateToAbbreviatedFormat(flight.departureDate);
            const convertedArrivalTime = convertTimeToAmerican(flight.arrivalTime);
            const convertedArrivalDate = convertDateToAbbreviatedFormat(flight.arrivalDate);
            const convertedDuration = convertDurationToTime(flight.duration);

            return {
                ...flight,
                departureTime: convertedDepartureTime,
                departureDate: convertedDepartureDate,
                arrivalTime: convertedArrivalTime,
                arrivalDate: convertedArrivalDate,
                duration: convertedDuration,
            };
        });
    } catch (error){
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return;
        } else {
            console.log('unexpected error: ', error);
            return;
        }
    }
}

export async function getClientTickets(request: TicketRequest){
    try {
        const response = await axios.post<ResponseData<Ticket>>(
            API_URL+TICKETS,
            request,
            {
                headers: {
                    Accept: 'application/json',
                },
            },
        );
        const tickets: Ticket[] = response.data.data.tickets;
        return tickets;
    } catch (error){
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return;
        } else {
            console.log('unexpected error: ', error);
            return;
        }
    }
}

export async function purchaseTicket(request: PurchaseRequest){
    try {
        const response = await axios.post<ResponseData<Purchase>>(
            API_URL+PURCHASE,
            request,
            {
                headers: {
                    Accept: 'application/json',
                },
            },
        );
        const purchaseStatus: Purchase[] = response.data.data.success;
        return purchaseStatus;
    } catch (error){
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return;
        } else {
            console.log('unexpected error: ', error);
            return;
        }
    }
}

function convertTimeToAmerican(time: string): string {
    const [hours, minutes] = time.split(':');
    const date = new Date();
    date.setHours(Number(hours));
    date.setMinutes(Number(minutes));

    return date.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });
}

function convertDateToAbbreviatedFormat(date: string): string {
    const [year, month, day] = date.split('-');
    const dateObj = new Date(Number(year), Number(month) - 1, Number(day));

    return dateObj.toLocaleString('en-US', {
        day: 'numeric',
        month: 'short'
    });
}

function convertDurationToTime(durationInSeconds: number): string {
    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);

    if (minutes < 10 && minutes > -1){
        return `${hours}h 0${minutes}m`;
    }else{
        return `${hours}h ${minutes}m`;
    }
}