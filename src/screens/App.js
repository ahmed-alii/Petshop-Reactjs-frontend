import React from 'react';
import '../css/App.css';
import Carousal from '../components/carousal'
import ServicesSection from "../components/services";

function App() {
    return (
        <div>
            <Carousal/>
            <ServicesSection/>
        </div>
    );
}

export default App;
