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

    useEffect(()=>{
        console.log(categoryData);
    },[categoryData])
    const test = [
        {
            title : '음식/주식',
            type : 'food',
            typeList : [
                {
                    title : '전체',
                    count : 10
                },
                {
                    title : '한식',
                },
                {
                    title : '중식',
                },
                {
                    title : '일식',
                },
                {
                    title : '양식',
                    count : 2
                },
                {
                    title : '치킨',
                },
                {
                    title : '피자',
                },
                {
                    title : '별식',
                },
                {
                    title : '퓨전요리',
                },
                {
                    title : '주점',
                    count : 2
                },
                {
                    title : '분식',
                    count : 1
                },
                {
                    title : '패스트푸트',
                }
            ]
        },
        {
            title : '카페/디저트',
            type : 'cafe',
            typeList : [
                {
                    title : '전체',
                    count : 5
                },
                {
                    title : '커피',
                },
                {
                    title : '제과제빵',
                    count : 5
                },
                {
                    title : '퓨전요리',
                }
            ]
        },
        {
            title : '서비스',
            type : 'service',
            typeList : [
                {
                    title : '전체',
                    count : 10
                },
                {
                    title : '교육',
                },
                {
                    title : '육아',
                },
                {
                    title : '스터디카페',
                    count : 10
                }
            ]
        }
    ]
    return (
        <>
            <h2>
                카테고리
                <Link to={'/category/show'}>ALL</Link>
            </h2>
            <Search />
            {/* {test.map((c)=><CategoryType info={c} key={c.title} title={true}/>)} */}
            {categoryData?.map((data)=><CategoryType info={data.categorys} key={data.parent_category} title={data.parent_category}/>)}
            
        </>
    );
}

