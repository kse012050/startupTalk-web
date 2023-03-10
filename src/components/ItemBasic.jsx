import React from 'react';

export default function ItemBasic({info}) {
    return (
        <div className='itemText'>
            <strong>{info.title}</strong>
            <div>
                <span>{info.shop}</span>
                <span>{info.cost}</span>
                <span>{info.taik}</span>
            </div>
        </div>
    );
}

