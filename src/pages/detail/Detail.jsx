import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import BackLink from '../../components/BackLink';
import ScrollFixed from '../../components/ScrollFixed';
import Tab from '../../components/Tab';
import { ResponsiveContext } from '../../context/Responsive';
import Counsel from './Counsel';
import Info from './Info';
// import * as Scroll from 'react-scroll';
// import { Linka, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


export default function Detail() {
    const responsive = useContext(ResponsiveContext);
    const [isScroll , setIsScroll] = useState(false)
    const [content , setContent] = useState('')
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > (scrollRef.current.offsetTop - 86)){
                setIsScroll(true)
            }else{
                setIsScroll(false)
            }
        });
    }, []);

    return (
        <>
            <figure>
                <div className='imgBox' style={{backgroundImage : `url(${require('../../images/item01.png')})`}}>
                </div>
                <figcaption>
                    <h2>
                        <mark>주점</mark>
                        지금 보고싶다
                    </h2>
                    <p>현재 <mark>3천명</mark>이 Talk 중</p>
                    <ul>
                        <li>
                            <strong>150개</strong>
                            점포수
                        </li>
                        <li>
                            <strong>1억원</strong>
                            창업비용
                        </li>
                        <li>
                            <strong>50.0㎡</strong>
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

            <mark className='support'><strong>창업비 지원</strong>현재 프로모션을 진행 중인 업체입니다.</mark>

            <ScrollFixed isScroll={isScroll} type="top">
                {(isScroll) &&
                    <BackLink />
                }
                <Tab tabList={tabList} content={[content ,setContent]}/>
            </ScrollFixed>

            <div ref={scrollRef} className="contentArea">
                {content === 'info' && <Info/>}
                {content === 'counsel' && <Counsel />}
            </div>
        </>
    );
}

