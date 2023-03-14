import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryType from '../../components/CategoryType';
import DropBox from '../../components/DropBox';
import Item from '../../components/Item';

export default function Show() {
    const [firstType , setFirstType] = useState('전체 카테고리')
    const [type , setType] = useState([
        '전체보기' , '음식/주점' , '카페/디저트' , '서비스'
    ])
    const [firstOrder , setFirstOrder] = useState('톡순');
    const [order , setOrder] = useState([
        '톡순' , '관심순' , '신규등록순' , '비용낮은순' , '비용높은순'
    ])

    const test = [
        {
            title : '음식/주식',
            typeList : [
                {
                    title : '음악/주점전체',
                    count : 10
                },
                {
                    title : '한식',
                },
                {
                    title : '중식',
                },
                {
                    title : '일식',
                },
                {
                    title : '양식',
                    count : 2
                },
                {
                    title : '치킨',
                },
                {
                    title : '피자',
                },
                {
                    title : '별식',
                },
                {
                    title : '퓨전요리',
                },
                {
                    title : '주점',
                    count : 2
                },
                {
                    title : '분식',
                    count : 1
                },
                {
                    title : '패스트푸트',
                }
            ]
        },
    ]

    // const
    return (
        <>
            <h2 className='textHidden'>전체 카테고리</h2>
            <DropBox type='big'  first={[firstType , setFirstType]} list={type}/>
            {!firstType.includes('전체') && test.map((c)=><CategoryType info={c} key={c.title} title={false}/>)}
            <div className='totalArea'>
                {firstType.includes('전체') && <p>총<mark>200</mark></p>}
                <DropBox type='small'  first={[firstOrder , setFirstOrder]} list={order}/>
            </div>
            
            <ul className='itemArea'>
                <li><Item img={require('../../images/item01.png')} info={{title : '하노이 맥주 밤거리' , shop : 72 , cost : 1 , taik : 3}} support={true} bookmark={true}/></li>
                <li><Item img={require('../../images/item02.png')} info={{title : '지금 보고싶다' , shop : 120 , cost : 1, taik : 1}} support={true} bookmark={true}/></li>
                <li><Item img={require('../../images/item01.png')} info={{title : '하노이 맥주 밤거리' , shop : 72 , cost : 1 , taik : 3}} support={true} bookmark={true}/></li>
                <li><Item img={require('../../images/item02.png')} info={{title : '지금 보고싶다' , shop : 120 , cost : 1, taik : 1}} support={true} bookmark={true}/></li>
                <li><Item img={require('../../images/item01.png')} info={{title : '하노이 맥주 밤거리' , shop : 72 , cost : 1 , taik : 3}} support={true} bookmark={true}/></li>
                <li><Item img={require('../../images/item02.png')} info={{title : '지금 보고싶다' , shop : 120 , cost : 1, taik : 1}} support={true} bookmark={true}/></li>
            </ul>
        </>
    );
}

