import React, { useContext } from 'react';
import { ResponsiveContext } from '../../context/Responsive';
import BackLink from '../BackLink';

export default function TermsOfUse({isPopup}) {
    const responsive = useContext(ResponsiveContext);
    return (
        <>
            <strong>이용약관</strong>
            <div className='textArea'>
                <ol>
                    <li>
                        <b>제1조(목적)</b>
                        <p>이 약관은 본인확인서비스 대행기관인 주식회사 코리아크레딧뷰로(이하 ''회사''라 합니다)와 본인확인서비스 이용자(이하 ''이용자''라 합니다) 간에 본인확인서비스 이용에 관한 회사와 이용자의 권리와 의무, 기타 제반 사항을 정함을 목적으로 합니다.</p>
                    </li>
                    <li>
                        <b>제1조(목적)</b>
                        <p>이 약관은 본인확인서비스 대행기관인 주식회사 코리아크레딧뷰로(이하 ''회사''라 합니다)와 본인확인서비스 이용자(이하 ''이용자''라 합니다) 간에 본인확인서비스 이용에 관한 회사와 이용자의 권리와 의무, 기타 제반 사항을 정함을 목적으로 합니다.</p>
                    </li>
                    <li>
                        <b>제1조(목적)</b>
                        <p>이 약관은 본인확인서비스 대행기관인 주식회사 코리아크레딧뷰로(이하 ''회사''라 합니다)와 본인확인서비스 이용자(이하 ''이용자''라 합니다) 간에 본인확인서비스 이용에 관한 회사와 이용자의 권리와 의무, 기타 제반 사항을 정함을 목적으로 합니다.</p>
                    </li>
                    <li>
                        <b>제1조(목적)</b>
                        <p>이 약관은 본인확인서비스 대행기관인 주식회사 코리아크레딧뷰로(이하 ''회사''라 합니다)와 본인확인서비스 이용자(이하 ''이용자''라 합니다) 간에 본인확인서비스 이용에 관한 회사와 이용자의 권리와 의무, 기타 제반 사항을 정함을 목적으로 합니다.</p>
                    </li>
                    <li>
                        <b>제1조(목적)</b>
                        <p>이 약관은 본인확인서비스 대행기관인 주식회사 코리아크레딧뷰로(이하 ''회사''라 합니다)와 본인확인서비스 이용자(이하 ''이용자''라 합니다) 간에 본인확인서비스 이용에 관한 회사와 이용자의 권리와 의무, 기타 제반 사항을 정함을 목적으로 합니다.</p>
                    </li>
                </ol>
            </div>
            <div className="btnArea">
                {!responsive &&
                    <BackLink />
                }
                <button onClick={()=>isPopup[1](!isPopup[0])}>팝업 닫기</button>   
            </div>
        </>
    );
}

