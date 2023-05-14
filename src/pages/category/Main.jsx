import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CategoryType from '../../components/CategoryType';
import Search from '../../components/input/Search';
import { categoryDataApi , searchDataApi} from '../../api/api';
import Item from '../../components/item/Item';
import Horizontal4 from '../../components/layout/Horizontal4';
import DropBox from '../../components/DropBox';

export default function Main() {
    const params = useParams()
    const [categoryData , setCategoryData] = useState();
    const [searchData , setSearchData] = useState();
    const [firstOrder , setFirstOrder] = useState('톡순');
    const order = [
        '톡순' , '관심순' , '신규등록순' , '비용낮은순' , '비용높은순'
    ]
    const [body , setBody] = useState(params)
    useEffect(()=>{
        if(!params.search){
            categoryDataApi().then(setCategoryData);
        }
    },[params.search])
    useEffect(()=>{
        if(body.search){
            searchDataApi(body).then(setSearchData);
        }
    },[body])
    return (
        <>
            <h2>
                카테고리
                {!params.search && <Link to={'/category/show'}>ALL</Link>}
            </h2>
            <Search body={[body , setBody]}/>
            {!params.search && categoryData?.map((data)=><CategoryType key={data.parent_category} info={data.categorys} title={data.parent_category}/>)}
            {(!!params.search) && (
                <>
                    {searchData?.data.total_count !== '0' &&
                        (
                            <>
                                <div className='searchTotal'>
                                    <p>검색결과 총<mark>{searchData?.data.total_count}개</mark></p>
                                    <DropBox type='small'  first={[firstOrder , setFirstOrder]} list={order} body={[body , setBody]}/>
                                </div>
                                <Horizontal4>
                                    {searchData?.list.map((data)=><li key={data.brand_id}><Item img={data.brand_main_store_file} info={{title : data.brand_name , shop : data.store_count , cost : data.start_up_money / 1000 , taik : data.chat_count}} support={data.promotion_yn} bookMark={data.interest_yn} id={data.brand_id}/></li>)}
                                </Horizontal4>
                            </>
                        )
                    }
                    {searchData?.data.total_count === '0' && 
                        <div className='searchFail'>
                            검색된 아이템, 브랜드가 없습니다.
                        </div>
                    }
                </>
                )
            }
        </>
    );
}

