import React from 'react';
import BoardLayout from '../../components/board/BoardLayout';

export default function ReceiptDetails() {
    return (
        <BoardLayout>
            <li className='titleArea'>
                <strong>번호</strong>
                <strong>브랜드명</strong>
                <strong>접수일</strong>
            </li>
            <li>
                <strong>5</strong>
                <p>하노이 맥주밤거리</p>
                <time>2023.12.23</time>
            </li>
            <li>
                <strong>4</strong>
                <p>지금 보고싶다</p>
                <time>2023.12.23</time>
            </li>
            <li>
                <strong>3</strong>
                <p>하노이 맥주밤거리</p>
                <time>2023.12.23</time>
            </li>
            <li>
                <strong>2</strong>
                <p>오봉집</p>
                <time>2023.12.23</time>
            </li>
            <li>
                <strong>1</strong>
                <p>하노이 맥주밤거리</p>
                <time>2023.12.23</time>
            </li>
        </BoardLayout>
    );
}

