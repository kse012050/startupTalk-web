import React, { useContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ResponsiveContext } from '../context/Responsive';

export default function Navbar() {
    let location = useLocation();
    const responsive = useContext(ResponsiveContext);
    location = location.pathname;
    let pageName = location.substring(1).split('/');
    return (
        <header>
            <div className='contentSize'>
                {(!responsive && pageName[0] === 'sign') &&
                    <Link className="prevPageLink imgBox">이전</Link>
                }
                <h1><Link to='/' className='imgBox'>창업톡</Link></h1>
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
                {pageName[0] === 'sign' ||
                    <div>
                        {responsive && 
                            <NavLink to='/category' className='icon-search'>검색</NavLink>
                        }
                        {pageName[0] === 'my' ? 
                            <Link to='/my'>MY</Link> :
                            <Link to='/sign'>로그인</Link>
                        }
                    </div>
                }
                
            </div>
        </header>
    );
}

