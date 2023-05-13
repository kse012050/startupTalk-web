import React from 'react';

export default function ItemRank({rankType , info}) {
    return (
        <div className='itemText'>
            <mark>{info.category}</mark>
            <strong>{info.brand_name}</strong>
            <span className={rankType}>
                {rankType === 'interest' && info.interest_count}
                {rankType === 'chat' && info.chat_count}
                {rankType === 'store' && info.store_count}
            </span>
        </div>
    );
}

