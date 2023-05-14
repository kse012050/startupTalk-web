import React from 'react';

export default function ItemPrice({info}) {
    return (
        <div className='itemText'>
            <p>{info.menu_name}</p>
            <strong>{info.menu_price}원</strong>
        </div>
    );
}

