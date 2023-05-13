import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CategoryType from '../../components/CategoryType';
import Search from '../../components/input/Search';
import { categoryDataApi } from '../../api/api';

export default function Main() {
    const [categoryData , setCategoryData] = useState();
    useEffect(()=>{
        categoryDataApi().then(setCategoryData)
    },[])

    /* useEffect(()=>{
        console.log(categoryData);
    },[categoryData]) */
    return (
        <>
            <h2>
                카테고리
                <Link to={'/category/show'}>ALL</Link>
            </h2>
            <Search />
            {categoryData?.map((data)=><CategoryType info={data.categorys} key={data.parent_category} title={data.parent_category}/>)}
        </>
    );
}

