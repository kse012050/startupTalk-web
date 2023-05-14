import React from 'react';
import { Link } from 'react-router-dom';
import ItemBasic from './ItemBasic';
import ItemBest from './ItemBest';
import ItemPrice from './ItemPrice';
import ItemRank from './ItemRank';

export default function Item({img , type , info , support , bookMark , rankType , id}) {
    const bookMarkClick = (e) =>{
        e.preventDefault();
        alert('북마크')
    }
    return (
        <Link to={`/detail/${id}`} className={`itemBox ${!type ? 'basic' : type}`}>
            <div className='imgBox' style={{backgroundImage : `url(${img})`}}>
                {support === 'y' &&
                    <span>
                        창업비 지원
                    </span>
                }
                {!!bookMark &&
                    <button onClick={bookMarkClick} className={bookMark === 'y' ? 'active' : null}>북마크</button>
                }
            </div>
            {!type && <ItemBasic info={info}/>}
            {type === 'best' && <ItemBest info={info}/>}
            {type === 'rank' && <ItemRank info={info} rankType={rankType}/>}
            {type === 'price' && <ItemPrice info={info}/>}
        </Link>
    );
}

