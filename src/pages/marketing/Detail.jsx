import React, { useContext, useEffect, useState } from 'react';
import { ResponsiveContext } from '../../context/Responsive';
import { Link, useParams } from 'react-router-dom';

export default function Detail() {
    const responsive = useContext(ResponsiveContext);
    // 페이지 서브 데이터 이름
    const { test } = useParams()
    const [isImg , setIsImg] = useState(false);
    const [classTest , setClassTest] = useState(()=>
        (test !== 'consulting' && test !== 'marketing') ?
        'textArea' :
        ''
    );

    useEffect(()=>{
        if(isImg && classTest !=='textArea'){
            setClassTest((prev)=>{
                return prev + ' active';
            })
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isImg])
    return (
        <>
            <div className='videoArea'>
                <iframe title='동영상' src="https://www.youtube.com/embed/eIUIknTz3-8" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            </div>

            <div className='detailArea'>
                <div className={classTest}>
                    {test === 'consulting' && <img src={require('../../images/detail-consulting.png')} alt=""/>}
                    {test === 'marketing' && <img src={require('../../images/detail-marketing.png')} alt=""/>}
                    {(test !== 'consulting' && test !== 'marketing') && '상세 영역'}
                </div>
                <button onClick={()=>setIsImg(!isImg)}>더보기</button>
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

