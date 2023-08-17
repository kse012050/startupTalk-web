import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemBasic from './ItemBasic';
import ItemBest from './ItemBest';
import ItemPrice from './ItemPrice';
import ItemRank from './ItemRank';
import Popup from '../popup/Popup';

export default function Item({img , type , info , support , bookMark , rankType , id}) {
    const [popup, setPopup] = useState(false);
    const bookMarkClick = (e) =>{
        e.preventDefault();
        // alert('북마크')
        setPopup(true)
    }
    return (
        <>
            {popup && 
                <Popup type="bookMark" isPopup={[popup , setPopup]}/>
            }
            <Link to={`/detail/${id}`} className={`itemBox ${!type ? 'basic' : type}`} onClick={(e)=>type === 'price' && e.preventDefault()}>
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
        </>
    );
}

