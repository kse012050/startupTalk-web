import React, { useState } from 'react';
import BoardLayout from '../../components/board/BoardLayout';

export default function Notice() {
    const [detailActive ,setDetailActive] = useState(false);
   
    return (
        <>
            <h3>공지사항</h3> 
            <BoardLayout>
                <li onClick={()=>setDetailActive(!detailActive)} className={detailActive ? 'active' : null}>
                    <button>
                        <span>창업톡 새소식</span>
                        <time>2023.12.23 12:00</time>
                    </button>
                    {detailActive && <div>텍스트 및 이미지 영역입니다.</div>}
                </li>
                <li>
                    <button>
                        <span>창업톡 런칭 소식</span>
                        <time>2023.12.23 12:00</time>
                    </button>
                </li>
                <li>
                    <button>
                        <span>버전 업데이트 안내</span>
                        <time>2023.12.23 12:00</time>
                    </button>
                </li>
                <li>
                    <button>
                        <span>개인정보처리방침 개정에 대한 안내</span>
                        <time>2023.12.23 12:00</time>
                    </button>
                </li>
                <li>
                    <button>
                        <span>개인정보처리방침 개정에 대한 안내</span>
                        <time>2023.12.23 12:00</time>
                    </button>
                </li>
            </BoardLayout>
        </>
    );
}

