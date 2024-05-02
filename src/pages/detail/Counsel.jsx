import React, { useEffect, useState } from 'react';
import * as validation from '../../api/validation';

export default function Counsel({ detailData, scopes}) {
    const [scopesPrice, setScopesPrice] = useState();
    const [totalPrice, setTotlePrice] = useState();
    
    useEffect(()=>{
        let scopesPriceList = 0;
        Object.keys(detailData.start_up_money_info_list).forEach(key => {
            const value = detailData.start_up_money_info_list[key];
            if(scopes.indexOf(value.name) > -1){
                scopesPriceList += parseInt(value.value);
            }
        });
        setScopesPrice(scopesPriceList)
    },[])


    useEffect(()=>{
        setTotlePrice(detailData.start_up_money - scopesPrice)
    },[scopesPrice])
    return (
        <div className='counselArea'>
            <div>
                <h3>
                    창업 비용
                    <small>점포면적 {detailData.standard_store_area}{/* m */}㎡ 기준</small>
                </h3>
                <table>
                    <tbody>
                        {detailData.start_up_money_info_list.map((data)=>
                            <tr key={data.name}>
                                <th>{data.name}</th>
                                <td className={scopes.indexOf(data.name) > -1 ? 'exemption' : ''}><s>{validation.addCommas(data.value)}만원</s></td>
                            </tr>
                        )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>
                                <strong>총합 <mark>{totalPrice && validation.addCommas(totalPrice)}만원</mark></strong>
                                <small>*VAT별도</small>
                            </th>
                        </tr>
                    </tfoot>
                </table>
                <small>*초기 10호점 까지 <mark>면제</mark></small>
            </div>

            {detailData.company_paiement_money_list &&
                <div>
                    <h3>본사 납입 비용</h3>
                    <table>
                        <tbody>
                            {detailData.company_paiement_money_list.map((data)=>
                                <tr key={data.name}>
                                    <th>{data.name}</th>
                                    <td>{data.value}만원</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <small>*창업 1년간 <mark>면제</mark></small>
                </div>
            }
        </div>
    );
}

