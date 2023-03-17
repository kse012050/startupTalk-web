import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import HomeSlider from '../components/HomeSlider';
import Navbar from '../components/Navbar';
import MyAppLink from './my/AppLink';
import MyTop from './my/Top';

export default function Root() {
    let location = useLocation();
    location = location.pathname;
    let pageName = location.substring(1).split('/');
    pageName[0] = pageName[0] ? pageName[0] : 'home';
    console.log(location);
    return (
        <div className={pageName[0] + 'Page'}>
            <Navbar />
            {pageName[0] === 'home' && <HomeSlider />}
            {pageName[0] === 'my' && <MyTop />}
            <section className={pageName[1] ? pageName[1] + 'Page' : 'mainPage'}>
                <Outlet/>
            </section>
            {location === '/my' && <MyAppLink />}
            <Footer />
        </div>
    );
}

