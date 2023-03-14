import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Navbar() {
    let location = useLocation();
    location = location.pathname.substring(1).split('/')[0];
    return (
        <header>
            <div className='contentSize'>
                <h1><Link to='/'><img src={require('../images/logo.png')} alt="창업톡 로고" /></Link></h1>
                <nav>
                    <ul>
                        <li><NavLink to='/category'>카테고리</NavLink></li>
                        <li><NavLink to='/ranking'>랭킹</NavLink></li>
                        <li><NavLink to='/marketing'>마케팅</NavLink></li>
                    </ul>
                    {location === 'sign' ||
                        <div>
                            <NavLink to='/category' className='icon-search'>검색</NavLink>
                            <Link to='/sign/select'>로그인</Link>
                        </div>
                    }
                </nav>
            </div>
        </header>
    );
}

