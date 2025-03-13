import React from 'react'
import './App.css'
import Navbar from "./components/Navbar/Navbar.tsx";
import Navlink from "./components/Navbar/Navlink.tsx";
import MainPage from "./components/MainPage/MainPage.tsx";
import SearchPlanes from "./components/SearchPlanes/SearchPlanes.tsx";
import AboutUsPage from "./components/AboutUsPage/AboutUsPage.tsx";
import QaPage from "./components/QAPage/QAPage.tsx";
import Footer from "./components/Footer/Footer.tsx";

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PurchaseTicket from "./components/PurchaseTicket/PurchaseTicket.tsx";
import SuccessPage from "./components/SuccessPage/SuccessPage.tsx";
import Tickets from "./components/Tickets/Tickets.tsx";

const App: React.FC = () => {
  return (
    <Router>
        <>
            <Navbar>
                <Navlink linkTo="/" name="Home"></Navlink>
                <Navlink linkTo="/flights" name="Flights"></Navlink>
                <Navlink linkTo="/tickets" name="My Tickets"></Navlink>
                <Navlink linkTo="/about" name="About us"></Navlink>
                <Navlink linkTo="/qa" name="Q/A"></Navlink>
            </Navbar>

            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/flights" element={<SearchPlanes />} />
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/qa" element={<QaPage />} />
                <Route path="/purchase" element={<PurchaseTicket />} />
                <Route path="/success" element={<SuccessPage />} />
                <Route path="/tickets" element={<Tickets />} />
            </Routes>

            <Footer></Footer>
        </>
    </Router>
  )
}

export default App
