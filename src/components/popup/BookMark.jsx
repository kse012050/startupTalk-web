import React from 'react';
import { Link } from 'react-router-dom';

export default function BookMark({isPopup}) {
    return (
        <>
            <strong>해당 기능 창업톡앱에서 이용가능합니다. </strong>
            <p>앱을 다운받아주세요 </p>
            <Link to={'https://play.google.com/store/apps/details?id=com.adcookco.foundationtalk'} className='beforeIcon-gp' target='_blank'><span>App Store</span></Link>
            <Link to={'https://itunes.apple.com/app/id6443805038'} className='beforeIcon-apple' target='_blank'><span>Google Play</span></Link>
            <button onClick={()=>isPopup[1](!isPopup[0])}>닫기</button>
        </>
    );
}

