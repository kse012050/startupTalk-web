import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ResponsiveContext } from '../context/Responsive';

export default function MyPageLink({mobileFullClass}) {
    const responsive = useContext(ResponsiveContext);
    return (
        <>
            {responsive &&
                <button className='logout'>로그아웃</button>
            }
            <ul className={mobileFullClass ? 'mobileFull' : null}>
                <li><Link to={'/my/notice'}>공지사항</Link></li>
                <li><Link to={'/my/account'}>계정정보</Link></li>
                <li><Link to={'/my/service'}>서비스 문의</Link></li>
            </ul>
            {responsive ||
                <button className='logout'>로그아웃</button>
            }
        </>
    );
}

