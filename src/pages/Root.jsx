import React, { useContext } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import HomeSlider from '../components/HomeSlider';
import Navbar from '../components/Navbar';
import MyTop from './my/Top';
import AppLink from '../components/AppLink';
import { ResponsiveContext } from '../context/Responsive';
import ScrollToTop from "../ScrollToTop";

export default function Root() {
    const responsive = useContext(ResponsiveContext);
    let location = useLocation();
    location = location.pathname;
    let pageName = location.substring(1).split('/');
    pageName[0] = pageName[0] ? pageName[0] : 'home';
    return (
        <div className={pageName[0] + 'Page'}>
            <ScrollToTop/>
            <Navbar />
            {pageName[0] === 'home' && <HomeSlider />}
            {(responsive && pageName[0] === 'my') && <MyTop />}
            {(!responsive && pageName[0] === 'my' && !pageName[1]) && <MyTop />}
            <section className={(pageName[0] !== 'detail' && pageName[1]) ? pageName[1] + 'Page' : 'mainPage'}>
                <Outlet/>
            </section>
            {location === '/my' && <AppLink />}
            <Footer />
        </div>
    );
}

