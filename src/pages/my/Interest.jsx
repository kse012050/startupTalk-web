import React, { useContext } from 'react';
import Item from '../../components/item/Item';
import Horizontal4 from '../../components/layout/Horizontal4';
import { ResponsiveContext } from '../../context/Responsive';

export default function Interest() {
    const responsive = useContext(ResponsiveContext);
    return (
        <>
            <Horizontal4>
                <li><Item img={require('../../images/item01.png')} info={{title : '하노이 맥주 밤거리' , shop : 72 , cost : 1 , taik : 3}} support={true} bookmark={true}/></li>
                <li><Item img={require('../../images/item02.png')} info={{title : '지금 보고싶다' , shop : 120 , cost : 1, taik : 1}} support={true} bookmark={true}/></li>
                <li><Item img={require('../../images/item01.png')} info={{title : '하노이 맥주 밤거리' , shop : 72 , cost : 1 , taik : 3}} support={true} bookmark={true}/></li>
                <li><Item img={require('../../images/item02.png')} info={{title : '지금 보고싶다' , shop : 120 , cost : 1, taik : 1}} support={true} bookmark={true}/></li>
                <li><Item img={require('../../images/item01.png')} info={{title : '하노이 맥주 밤거리' , shop : 72 , cost : 1 , taik : 3}} support={true} bookmark={true}/></li>
                <li><Item img={require('../../images/item02.png')} info={{title : '지금 보고싶다' , shop : 120 , cost : 1, taik : 1}} support={true} bookmark={true}/></li>
            </Horizontal4>
            {responsive &&
                <button>관심 아이템 더보기</button>
            }
        </>
    );
}

