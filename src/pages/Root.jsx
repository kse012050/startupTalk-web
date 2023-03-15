import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Top from './my/Top';

export default function Root() {
    let location = useLocation();
    location = location.pathname.substring(1).split('/');
    location[0] = location[0] ? location[0] : 'home'
    return (
        <div className={location[0] + 'Page'}>
            <Navbar />
            {location[0] === 'my' && <Top />}
            <section className={location[1] ? location[1] + 'Page' : 'mainPage'}>
                <Outlet/>
            </section>
            <Footer />
        </div>
    );
}

