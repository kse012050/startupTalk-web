import React from 'react';

export default function ItemBest({info}) {
    return (
        <div className='itemText'>
            <mark>{info.category}</mark>
            <strong>{info.brand_name}</strong>
            {info.today_interest_cnt !== '0' &&
                <span>{info.today_interest_cnt}</span>
            }
        </div>
    );
}

