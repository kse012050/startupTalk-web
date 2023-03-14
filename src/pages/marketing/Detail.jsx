import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Tab from '../../components/Tab';
import Counsel from './Counsel';
import Info from './Info';

export default function Detail() {
    const [content , setContent] = useState('')
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
                    <div>
                        <Link className='btn-color'>간편 상담 접수</Link>
                        <button>북마크</button>
                    </div>
                </figcaption>
            </figure>

            <Tab tabList={tabList} content={[content ,setContent]}/>

            {content === 'info' && <Info/>}
            {content === 'counsel' && <Counsel />}
        </>
    );
}

