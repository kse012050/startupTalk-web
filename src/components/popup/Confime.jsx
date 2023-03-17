import React from 'react';
import { Link } from 'react-router-dom';

export default function Confime({ isPopup , info , type}) {
    return (
        <>
            <div className='textArea'>
                {!!info.title && <b>{info.title}</b>}
                <p>{info.content}</p>
            </div>
            <div className="btnArea">
                {type === 'find' && <Link>ID/PW찾기</Link>}
                <button onClick={()=>isPopup[1](!isPopup[0])}>확인</button>
            </div>
        </>
    );
}

