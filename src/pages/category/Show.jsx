import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CategoryType from '../../components/CategoryType';
import DropBox from '../../components/DropBox';
import Item from '../../components/item/Item';
import Horizontal4 from '../../components/layout/Horizontal4';
import { categoryDataApi, searchDataApi } from '../../api/api';

export default function Show() {
    const testPage = useParams()
    const [searchData , setSearchData] = useState();
    const [listData , setListhData] = useState();
    useEffect(()=>{
        if(testPage.parent_category){
            testPage.parent_category = testPage.parent_category.replace(',','/')
            searchDataApi(testPage).then(setSearchData)
        }else{
            categoryDataApi().then(setSearchData);
        }
    },[])

    useEffect(()=>{
        console.log(searchData);
    },[searchData])
    const [firstType , setFirstType] = useState(()=>{
        let pageName = ''
        !testPage.parent_category ? 
            (pageName = '전체') :
            (pageName = testPage.parent_category.replace(',','/'));
        return pageName;
    })
    const type = [
        '전체보기' , '음식/주점' , '카페/디저트' , '서비스'
    ]
    const [firstOrder , setFirstOrder] = useState('톡순');
    const order = [
        '톡순' , '관심순' , '신규등록순' , '비용낮은순' , '비용높은순'
    ]


    return (
        <>
            <h2 className='textHidden'>전체 카테고리</h2>
            <DropBox type='big'  first={[firstType , setFirstType]} list={type}/>
            {/* {!firstType.includes('전체') && test.map((c)=><CategoryType info={c} key={c.title} title={false}/>)} */}
            <div className='totalArea'>
                {firstType.includes('전체') && <p>총<mark>200</mark></p>}
                <DropBox type='small'  first={[firstOrder , setFirstOrder]} list={order}/>
            </div>
            
            <Horizontal4>
                {searchData?.list?.map((data)=><li key={data.brand_id}><Item img={data.brand_main_store_file} info={{title : data.brand_name , shop : data.store_count , cost : data.start_up_money / 1000 , taik : data.chat_count}} support={true} bookmark={true}/></li>)}
            </Horizontal4>
        </>
    );
}

