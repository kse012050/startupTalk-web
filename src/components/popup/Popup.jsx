import React from 'react';
import Confime from './Confime';
import TermsOfUse from './TermsOfUse';
import BookMark from './BookMark';
import EasyConsult from './EasyConsult';

export default function Popup({type , isPopup , info}) {
    return (
        <div className={`popupBox-${type}`} onClick={()=>isPopup[1](!isPopup[0])}>
            <div onClick={(e)=>e.stopPropagation()}>
                {type === 'termsOfUse' && <TermsOfUse isPopup={isPopup}/>}
                {type === 'confime' && <Confime isPopup={isPopup} info={info} />}
                {type === 'find' && <Confime isPopup={isPopup} info={info} type={type} />}
                {type === 'bookMark' && <BookMark isPopup={isPopup}/>}
                {type === 'easyConsult' && <EasyConsult isPopup={isPopup}/>}
            </div>
        </div>
    );
}

