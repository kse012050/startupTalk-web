import React, { useEffect, useState } from 'react';

export default function ItemBasic({info}) {
    const [unit, setUnit] = useState('');
    useEffect(()=>{
        if(info.cost >= 10000){
            setUnit(Math.floor(info.cost / 10000) + '.0억원')
        }else if(info.cost >= 1000){
            setUnit(Math.floor(info.cost / 1000) + '.0천만원')
            
        }else if(info.cost >= 100){
            setUnit(Math.floor(info.cost / 100) + '.0백만원')
        }else {
            setUnit(info.cost + '원')
        }
    },[])
    return (
        <div className='itemText'>
            <strong>{info.title}</strong>
            <div>
                <span>{info.shop}</span>
                <span>{unit}</span>
                <span>{info.taik}</span>
            </div>
        </div>
    );
}

