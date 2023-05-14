import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DropBox from '../../components/DropBox';
import Item from '../../components/item/Item';
import Horizontal4 from '../../components/layout/Horizontal4';
import { categoryDataApi, searchDataApi } from '../../api/api';

export default function Show() {
    const params = useParams()
    const [searchData , setSearchData] = useState();
    const [categoryData , setCategoryData] = useState();
    const [firstCategory , setFirstCategory] = useState();
    const [body , setBody] = useState(()=>{
        let data;
        if(params.id){
            data = {"category_id" : params.id}
        }else if(params.name){
            params.name !== '전체' && (data = {"parent_category" : params.name.replace(',','/')})
        }
        return data;
    })
    useEffect(()=>{
        searchDataApi(body).then((data)=>{
            setSearchData(data);
            setFirstCategory(()=>data.data.parent_category ? data.data.parent_category : '전체보기');
        })
    },[body])
    
    useEffect(()=>{
        categoryDataApi().then((data)=>{
            let categoryName = data.map((d)=> d.parent_category)
            categoryName = ['전체' , ...categoryName]
            setCategoryData(categoryName);
        })
    },[])

    useEffect(()=>{
        console.log(searchData);
    },[searchData])
    const [firstOrder , setFirstOrder] = useState('톡순');
    const order = [
        '톡순' , '관심순' , '신규등록순' , '비용낮은순' , '비용높은순'
    ]

    return (
        <>
            <h2 className='textHidden'>전체 카테고리</h2>
            <DropBox type='big'  first={[firstCategory , setFirstCategory]} list={categoryData} body={[body , setBody]}/>
            {/* {!firstCategory.includes('전체') && test.map((c)=><CategoryType info={c} key={c.title} title={false}/>)} */}
            <div className='totalArea'>
                {firstCategory.includes('전체') && <p>총<mark>{searchData.data.total_count}</mark></p>}
                  <DropBox type='small'  first={[firstOrder , setFirstOrder]} list={order} body={[body , setBody]}/>
            </div>
            
            <Horizontal4>
                {searchData?.list?.map((data)=><li key={data.brand_id}><Item img={data.brand_main_store_file} info={{title : data.brand_name , shop : data.store_count , cost : data.start_up_money / 1000 , taik : data.chat_count}} support={data.promotion_yn} bookMark={data.interest_yn} id={data.brand_id}/></li>)}
            </Horizontal4>
        </>
    );
}

