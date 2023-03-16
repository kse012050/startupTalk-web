import React from 'react';
import { Link } from 'react-router-dom';
import ItemBasic from './ItemBasic';
import ItemBest from './ItemBest';
import ItemPrice from './ItemPrice';
import ItemRank from './ItemRank';

export default function Item({img , type , info , support , bookmark , rankType}) {
    const bookMark = (e) =>{
        e.preventDefault();
        alert('북마크')
    }
    return (
        <Link to={'/detail/test'} className={`itemBox ${!type ? 'basic' : type}`}>
            <div className='imgBox' style={{backgroundImage : `url(${img})`}}>
                {support &&
                    <span>
                        창업비 지원
                    </span>
                }
                {!!bookmark &&
                    <button onClick={bookMark}>북마크</button>
                }
            </div>
            {!type && <ItemBasic info={info}/>}
            {type === 'best' && <ItemBest />}
            {type === 'rank' && <ItemRank rankType={rankType}/>}
            {type === 'price' && <ItemPrice />}
        </Link>
    );
}

