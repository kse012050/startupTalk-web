import React, { useCallback, useEffect, useState } from 'react';
import Item from '../components/item/Item';
import { rankingDataApi } from '../api/api';

export default function Ranking() {
    const [rankType , setRankType] = useState('interest');
    const [rankingData , setRankingData] = useState();

    const tabMenu = useCallback((e) =>{
        let childrenEle = e.target.parentElement.children;
        for(let a = 0; a < childrenEle.length ; a++){
            childrenEle[a].className = ''
        }
        e.target.className = 'active'
        setRankType(()=>{
            let name;
            e.target.innerHTML === '관심도' && (name = 'interest')
            e.target.innerHTML === 'Talk 수' && (name = 'chat')
            e.target.innerHTML === '점포 수' && (name = 'store')
            return name;
        })
    },[])
    
    useEffect(()=>{
        rankingDataApi(rankType).then((data)=>{
            /* data.list.sort((a , b)=>{
                if(rankType === 'interest') {
                    return b.interest_count - a.interest_count;
                }else if(rankType === 'chat'){
                    return b.chat_count - a.chat_count;
                }else if(rankType === 'store'){
                    return b.store_count - a.store_count;
                }
            }) */
            setRankingData(data)
           
        })
    },[rankType])
    
   /*  useEffect(()=>{
        console.log(rankingData);
    },[rankingData]) */
  
    return (
        <>
            <h2>실시간 랭킹</h2>
            <ul className='tabArea mobileFull' onClick={tabMenu}>
                <li className='active'>관심도</li>
                <li>Talk 수</li>
                <li>점포 수</li>
            </ul>
            <ol>
                {rankingData?.list?.map((data)=><li key={data.brand_id}><Item img={data.brand_logo_file} type="rank" bookMark={data.interest_yn} rankType={rankType} info={data} id={data.brand_id}/></li>)}
                {/* <li><Item img={require('../images/item-best01.png')} type="rank" bookmark={true} rankType='taik'/></li>
                <li><Item img={require('../images/item-best01.png')} type="rank" bookmark={true} rankType='shop'/></li>
                <li><Item img={require('../images/item-best01.png')} type="rank" bookmark={true} rankType='interest'/></li>
                <li><Item img={require('../images/item-best01.png')} type="rank" bookmark={true} rankType='taik'/></li>
                <li><Item img={require('../images/item-best01.png')} type="rank" bookmark={true} rankType='taik'/></li>
                <li><Item img={require('../images/item-best01.png')} type="rank" bookmark={true} rankType='taik'/></li>
                <li><Item img={require('../images/item-best01.png')} type="rank" bookmark={true} rankType='taik'/></li>
                <li><Item img={require('../images/item-best01.png')} type="rank" bookmark={true} rankType='taik'/></li>
                <li><Item img={require('../images/item-best01.png')} type="rank" bookmark={true} rankType='taik'/></li>
                <li><Item img={require('../images/item-best01.png')} type="rank" bookmark={true} rankType='taik'/></li> */}
            </ol>
        </>
    );
}

