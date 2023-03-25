import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyPageLink from '../../components/MyPageLink';
import { ResponsiveContext } from '../../context/Responsive';

export default function Top() {
    const responsive = useContext(ResponsiveContext);
    return (
        <div className='topArea'>
            <div className='contentSize'>
                <h2><Link to='/my'>홍길동</Link>님의 페이지</h2>
                {responsive ?
                    <MyPageLink /> :
                    <Link to={'/my/mobileSetting'}>설정</Link>
                }
            </div>
        </div>
    );
}

