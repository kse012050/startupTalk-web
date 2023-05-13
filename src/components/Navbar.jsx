import React, { useContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ResponsiveContext } from '../context/Responsive';
import BackLink from './BackLink';

export default function Navbar() {
    const responsive = useContext(ResponsiveContext);
    let location = useLocation();
    location = location.pathname;
    let pageName = location.substring(1).split('/');
    const isMobileNavbar = !responsive && (
        pageName[0] === 'sign' || 
        pageName[0] === 'receipt' ||
        (pageName[0] === 'marketing' && !!pageName[1]) ||
        (pageName[0] === 'my' && !!pageName[1])
        );
    const isMobileHome = !responsive && (
        (pageName[0] === 'marketing' && !!pageName[1]) ||
        (pageName[0] === 'my' && !!pageName[1])
    )
    return (
        <header>
            <div className='contentSize'>
                {isMobileNavbar &&
                    <BackLink />
                }
                {isMobileHome ||
                    <h1><Link to='/' className='imgBox'>창업톡</Link></h1>
                }
                <nav>
                    <ul>
                        {responsive ||
                            <li><NavLink to='/'>홈</NavLink></li>
                        }
                        <li><NavLink to='/category'>카테고리</NavLink></li>
                        <li><NavLink to='/ranking'>랭킹</NavLink></li>
                        <li><NavLink to='/marketing'>마케팅</NavLink></li>
                    </ul>
                </nav>
                {/* 로그인 */}
                {/* {(pageName[0] === 'sign' || isMobileNavbar) ||
                    <div>
                        {responsive && 
                            <NavLink to='/category' className='icon-search'>검색</NavLink>
                        }
                        {pageName[0] === 'my' ? 
                            <Link to='/my'>MY</Link> :
                            <Link to='/sign'>로그인</Link>
                        }
                    </div>
                } */}
                
            </div>
        </header>
    );
}

