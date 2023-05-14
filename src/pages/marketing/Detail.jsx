import React, { useCallback, useContext, useEffect, useState } from 'react';
import { ResponsiveContext } from '../../context/Responsive';
import { Link, useParams } from 'react-router-dom';
import { marketingDetailDataApi } from '../../api/api';

export default function Detail() {
    const responsive = useContext(ResponsiveContext);
    // 페이지 서브 데이터 이름
    const params = useParams()
    const [imgClass , setImgClass] = useState('');
    const [detailData , setDetailData] = useState('');

    useEffect(()=>{
        marketingDetailDataApi().then(setDetailData)
    },[])
    useEffect(()=>{
        console.log(detailData);
    },[detailData])

    const imgMore = useCallback(()=>{
        setImgClass((prev)=>{
            return prev + ' active';
        })
    },[])
    return (
        <>
            {/* <div className='videoArea'>
                <iframe title='동영상' src="https://www.youtube.com/embed/eIUIknTz3-8" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            </div> */}

            <div className='detailArea'>
                <div className={imgClass}>
                    {detailData && <img src={detailData[params.id].marketing_detail_image_file} alt={detailData[params.id].title}/>}
                </div>
                <button onClick={imgMore}>더보기</button>
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

