import React from 'react';
import ReactDOM from 'react-dom';
import App from './screens/App';
import Navbar from "./components/navbar";
import Footer from "./components/footer";

ReactDOM.render(
    <div>
        <Navbar/>
        <App/>
        <Footer/>
    </div>,

    document.getElementById('root')
);
