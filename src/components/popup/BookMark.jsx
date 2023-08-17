import React from 'react';
import { Link } from 'react-router-dom';

export default function BookMark({isPopup}) {
    return (
        <>
            <strong>해당 기능 창업톡앱에서 이용가능합니다. </strong>
            <p>앱을 다운받아주세요 </p>
            <Link to={''} className='beforeIcon-gp'><span>App Store</span></Link>
            <Link to={''} className='beforeIcon-apple'><span>Google Play</span></Link>
            <button onClick={()=>isPopup[1](!isPopup[0])}>닫기</button>
        </>
    );
}

