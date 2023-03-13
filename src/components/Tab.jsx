import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function Tab({tabList}) {
    const location = useLocation();
    let pageName = location.pathname.substring(1).split('/');
    pageName.pop();
    pageName = pageName.join('/');
    return (
        <ul className='tabBox'>
            {tabList.map((t , i)=>{
                return <li key={i}><NavLink to={`/${pageName}/${t.path}`}>{t.name}</NavLink></li> 
            })}
        </ul>
    );
}

