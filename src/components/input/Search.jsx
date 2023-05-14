import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Search({ body }) {
    const navigate = useNavigate();
    const [searchText , setSearchText] = useState();
    const onChange = (e)=>{
        setSearchText(e.target.value.trim())
    }
    const searchClick = useCallback(()=>{
        if(!searchText){return}
        body[1]({"search" : searchText});
        navigate(`/category/search/${searchText}`)
    },[navigate ,searchText , body])
    return (
        <div className='searchBox'>
            <input type="text" placeholder='창업 아이템, 브랜드명을 검색해보세요' onChange={onChange}/>
            <button onClick={searchClick}>검색</button>
        </div>
    );
}

