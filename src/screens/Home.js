import React from 'react';
import Carousal from '../components/carousal'
import ServicesSection from "../components/services";
import About from "../components/About";
import '../css/App.css';
import PopularPets from '../components/PopularPets';

function Home() {
    return (

        <div>
            <Carousal/>
            <ServicesSection/>
            <About/>
            <PopularPets/>
        </div>
    );
}

export default Home;
