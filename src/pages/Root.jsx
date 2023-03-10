import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Root() {
    let location = useLocation();
    location = location.pathname.substring(1).split('/')[0]
    location = location ? location : 'main'
    return (
        <div className={location + 'Page'}>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}

