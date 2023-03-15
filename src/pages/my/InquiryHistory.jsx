import React, { useState } from 'react';
import BoardLayout from '../../components/board/BoardLayout';

export default function InquiryHistory() {
    const [detailActive ,setDetailActive] = useState(false);
    return (
        <>
            <BoardLayout className="test">
                <li className={detailActive ? 'active' : null}>
                    <button onClick={()=>setDetailActive(!detailActive)}>
                        <strong className='fin'>답변완료</strong>
                        <span>창업톡 새소식</span>
                        <time>2023.12.23 12:00</time>
                    </button>
                    {detailActive && (
                        <>
                            <div className='detailArea'>
                                텍스트 및 이미지 영역입니다.
                                <div className="imgArea">
                                    <div className="imgBox" style={{backgroundImage: `url(${require('../../images/item-best01.png')})`}}></div>
                                    <div className="imgBox" style={{backgroundImage: `url(${require('../../images/item-best01.png')})`}}></div>
                                    <div className="imgBox" style={{backgroundImage: `url(${require('../../images/item-best01.png')})`}}></div>
                                </div>
                            </div>
                            <div className='answerArea'>
                                <b>답변내용</b>
                                안녕하세요 창업톡입니다. 텍스트 영역입니다.
                            </div>
                        </>
                    )}
                </li>
                <li>
                    <button>
                        <strong className='fin'>답변완료</strong>
                        <span>창업톡 런칭 소식</span>
                        <time>2023.12.23 12:00</time>
                    </button>
                </li>
                <li>
                    <button>
                        <strong>처리 중</strong>
                        <span>버전 업데이트 안내</span>
                        <time>2023.12.23 12:00</time>
                    </button>
                </li>
                <li>
                    <button>
                        <strong>처리 중</strong>
                        <span>개인정보처리방침 개정에 대한 안내</span>
                        <time>2023.12.23 12:00</time>
                    </button>
                </li>
                <li>
                    <button>
                        <strong>처리 중</strong>
                        <span>개인정보처리방침 개정에 대한 안내</span>
                        <time>2023.12.23 12:00</time>
                    </button>
                </li>
            </BoardLayout>
        </>
    );
}

