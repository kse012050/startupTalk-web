import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

export default function Root() {
    let location = useLocation();
    location = location.pathname.substring(1).split('/')
    return (
        <div className={location[0] + 'Page'}>
            <Navbar />
            <div className={location[1] + 'Page'}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

