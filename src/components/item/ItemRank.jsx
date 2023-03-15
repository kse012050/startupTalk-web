import React from 'react';

export default function ItemRank({rankType}) {
    return (
        <div className='itemText'>
            <mark>양식</mark>
            <strong>리얼 파스타</strong>
            <span className={rankType}>200</span>
        </div>
    );
}

