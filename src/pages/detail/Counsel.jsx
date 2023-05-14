import React from 'react';

export default function Counsel({ detailData }) {
    return (
        <div className='counselArea'>
            <div>
                <h3>
                    창업 비용
                    <small>점포면적 {detailData.standard_store_area}{/* m */}㎡ 기준</small>
                </h3>
                <table>
                    <tbody>
                        {/* <tr>
                            <th>보증금</th>
                            <td>1000만원</td>
                        </tr>
                        <tr>
                            <th>교육비</th>
                            <td className='exemption'><s>1000만원</s></td>
                        </tr>
                        <tr>
                            <th>가맹비</th>
                            <td className='exemption'><s>1000만원</s></td>
                        </tr>
                        <tr>
                            <th>인테리어</th>
                            <td>1000만원</td>
                        </tr>
                        <tr>
                            <th>기타</th>
                            <td>1000만원</td>
                        </tr> */}
                        {detailData.start_up_money_info_list.map((data)=>
                            <tr key={data.name}>
                                <th>{data.name}</th>
                                <td>{data.value}만원</td>
                            </tr>
                        )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>
                                <strong>총합 <mark>{detailData.start_up_money}만원</mark></strong>
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
                            {/* <tr>
                                <th>로열티</th>
                                <td>1000만원</td>
                            </tr>
                            <tr>
                                <th>광고/판촉비</th>
                                <td className='exemption'><s>1000만원</s></td>
                            </tr> */}
                        </tbody>
                    </table>
                    <small>*창업 1년간 <mark>면제</mark></small>
                </div>
            }
        </div>
    );
}

