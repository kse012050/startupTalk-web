import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import BackLink from '../../components/BackLink';
import ScrollFixed from '../../components/ScrollFixed';
import Tab from '../../components/Tab';
import { ResponsiveContext } from '../../context/Responsive';
import Counsel from './Counsel';
import Info from './Info';
import { brandDetailDataApi } from '../../api/api';
// import * as Scroll from 'react-scroll';
// import { Linka, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


export default function Detail() {
    const params = useParams();
    const responsive = useContext(ResponsiveContext);
    const [isScroll , setIsScroll] = useState(false);
    const [content , setContent] = useState('');
    const [detailData , setDetailData] = useState('');
    const scrollRef = useRef();
    const tabList = [{
            name : '브랜드 정보',
            path : 'info'
        },{
            name : '창업개요',
            path : 'counsel'
        },
    ]

    useEffect(()=>{
        setContent(tabList[0].path)
        brandDetailDataApi(params.id).then(setDetailData)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(()=>{
        console.log(detailData);
    },[detailData])

    useEffect(() => {
        const scrollEvent = () =>{
            if(window.scrollY > (scrollRef.current.offsetTop - 86)){
                setIsScroll(true)
            }else{
                setIsScroll(false)
            }
        }
        window.addEventListener("scroll", scrollEvent);
        return ()=>{
            window.removeEventListener('scroll' , scrollEvent);
        }
    }, []);

    return (
        <>
            <figure>
                <div className='imgBox' style={{backgroundImage : `url(${detailData.brand_main_store_file})`}}>
                </div>
                <figcaption>
                    <h2>
                        <mark>{detailData.category}</mark>
                        {detailData.brand_name}
                    </h2>
                    <p>현재 <mark>{detailData.chat_count}명</mark>이 Talk 중</p>
                    <ul>
                        <li>
                            <strong>{detailData.store_count}개</strong>
                            점포수
                        </li>
                        <li>
                            <strong>{detailData.start_up_money / 1000}억원</strong>
                            창업비용
                        </li>
                        <li>
                            <strong>{detailData.standard_store_area}㎡</strong>
                            면적 기준
                        </li>
                    </ul>
                    <ScrollFixed isScroll={isScroll} type="bottom">
                        <div className='receiptArea'>
                            <Link to={'/receipt'} className='btn-basic'>간편 상담 접수</Link>
                            <button>관심저장</button>
                        </div>
                    </ScrollFixed>
                </figcaption>
            </figure>
            {detailData.promotion_yn === 'y' &&
                <mark className='support'><strong>창업비 지원</strong>현재 프로모션을 진행 중인 업체입니다.</mark>
            }

            <ScrollFixed isScroll={isScroll} type="top">
                {(isScroll && !responsive) &&
                    <BackLink />
                }
                <Tab tabList={tabList} content={[content ,setContent]}/>
            </ScrollFixed>

            <div ref={scrollRef} className="contentArea">
                {content === 'info' && <Info detailData={detailData}/>}
                {content === 'counsel' && <Counsel detailData={detailData}/>}
            </div>
        </>
    );
}

