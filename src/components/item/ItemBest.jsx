import React from 'react';

export default function ItemBest({info}) {
    return (
        <div className='itemText'>
            <mark>{info.category}</mark>
            <strong>{info.brand_name}</strong>
            <span>200</span>
        </div>
    );
}

