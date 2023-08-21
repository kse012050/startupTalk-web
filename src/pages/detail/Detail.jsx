import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import BackLink from '../../components/BackLink';
import ScrollFixed from '../../components/ScrollFixed';
import Tab from '../../components/Tab';
import { ResponsiveContext } from '../../context/Responsive';
import Counsel from './Counsel';
import Info from './Info';
import * as api from '../../api/api';
import Popup from '../../components/popup/Popup';
// import * as Scroll from 'react-scroll';
// import { Linka, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


export default function Detail() {
    const params = useParams();
    const responsive = useContext(ResponsiveContext);
    const [firstDetailEntry, setFirstDetailEntry] = useState(true)
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
    const [popup, setPopup] = useState(false);
    const [cost, setCost] = useState();

    useEffect(()=>{
        setFirstDetailEntry(api.getCookieBoolean('firstDetailEntry'))
        setContent(tabList[0].path)
        api.brandDetailDataApi(params.id).then(setDetailData)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

   /*  useEffect(()=>{
        console.log(detailData);
    },[detailData]) */

    useEffect(()=>{
        if(detailData.start_up_money >= 10000){
            setCost(Math.floor(detailData.start_up_money / 10000) + '.0억원')
        }else if(detailData.start_up_money >= 1000){
            setCost(Math.floor(detailData.start_up_money / 1000) + '.0천만원')
        }else if(detailData.start_up_money >= 100){
            setCost(Math.floor(detailData.start_up_money / 100) + '.0백만원')
        }else {
            setCost(detailData.start_up_money + '원')
        }
    },[detailData])

    const onFirstEntry = () =>{
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 1);
        document.cookie = `firstDetailEntry=false; days ?; expires=${expirationDate.toUTCString()}`
        setFirstDetailEntry(false)
    }

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

    const temporary = (e) =>{
        e.preventDefault();
        setPopup(true)
    }

    return (
        <>
            {(!responsive && firstDetailEntry) &&
                <div className="appView">
                    <div>
                        <p>
                            이 창업아이템이<br/>
                            마음에 드시나요?
                            <small>
                                창업톡앱에서 관심 브랜드사와<br/>
                                무료 실시간 1:1채팅을 시작해보세요.
                            </small>
                        </p>
                    </div>
                    <a href="#">앱 다운로드</a>
                    <button onClick={onFirstEntry}>오늘 하루 보지 않기</button>
                </div>
            }
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
                            {/* <strong>{detailData.start_up_money / 1000}억원</strong> */}
                            <strong>{cost}</strong>
                            창업비용
                        </li>
                        <li>
                            <strong>{detailData.standard_store_area}㎡</strong>
                            면적 기준
                        </li>
                    </ul>
                    <ScrollFixed isScroll={isScroll} type="bottom">
                        <div className='receiptArea'>
                            <Link to={'/receipt'} className='btn-basic' onClick={temporary}>간편 상담 접수</Link>
                            {/* <button onClick={()=>setPopup(true)} className='btn-basic'>간편 상담 접수</button> */}
                            <button onClick={()=>setPopup(true)}>관심저장</button>
                        </div>
                    </ScrollFixed>
                </figcaption>
            </figure>

            {popup && 
                <Popup type="bookMark" isPopup={[popup , setPopup]}/>
            }

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

