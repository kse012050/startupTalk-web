import React from 'react';
import Item from '../components/item/Item';

export default function Ranking() {

    const tabMenu = (e) =>{
        let childrenEle = e.target.parentElement.children;
        for(let a = 0; a < childrenEle.length ; a++){
            childrenEle[a].className = ''
        }
        e.target.className = 'active'
    }
  
    return (
        <>
            <h2>실시간 랭킹</h2>
            <ul className='tabArea mobileFull' onClick={tabMenu}>
                <li className='active'>관심도</li>
                <li>Talk 수</li>
                <li>점포 수</li>
            </ul>
            <ol>
                <li><Item img={require('../images/item-best01.png')} type="rank" bookmark={true} rankType='taik'/></li>
                <li><Item img={require('../images/item-best01.png')} type="rank" bookmark={true} rankType='shop'/></li>
                <li><Item img={require('../images/item-best01.png')} type="rank" bookmark={true} rankType='interest'/></li>
                <li><Item img={require('../images/item-best01.png')} type="rank" bookmark={true} rankType='taik'/></li>
                <li><Item img={require('../images/item-best01.png')} type="rank" bookmark={true} rankType='taik'/></li>
                <li><Item img={require('../images/item-best01.png')} type="rank" bookmark={true} rankType='taik'/></li>
                <li><Item img={require('../images/item-best01.png')} type="rank" bookmark={true} rankType='taik'/></li>
                <li><Item img={require('../images/item-best01.png')} type="rank" bookmark={true} rankType='taik'/></li>
                <li><Item img={require('../images/item-best01.png')} type="rank" bookmark={true} rankType='taik'/></li>
                <li><Item img={require('../images/item-best01.png')} type="rank" bookmark={true} rankType='taik'/></li>
            </ol>
        </>
    );
}

