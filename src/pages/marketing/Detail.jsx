import React, { useContext } from 'react';
import { ResponsiveContext } from '../../context/Responsive';
import { Link } from 'react-router-dom';

export default function Detail() {
    const responsive = useContext(ResponsiveContext);
    return (
        <>
            <div className='videoArea'>
                <iframe title='동영상' src="https://www.youtube.com/embed/eIUIknTz3-8" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            </div>

            <div className='detailArea'>
                <div>상세 영역</div>
                <button>더보기</button>
            </div>

            <div className="fixedArea">
                <div className='contentSize01'>
                    {responsive && <p>지금 바로 설계 상담받고 싶다면?</p>}
                    <Link to={'/marketing/counsel'} className={ responsive ? 'btn-white' : 'btn-basic'}>신청하기</Link>
                </div>
            </div>
        </>
    );
}

