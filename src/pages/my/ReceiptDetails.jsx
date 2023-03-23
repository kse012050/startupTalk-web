import React, { useContext } from 'react';
import BoardLayout from '../../components/board/BoardLayout';
import { ResponsiveContext } from '../../context/Responsive';

export default function ReceiptDetails() {
    const responsive = useContext(ResponsiveContext);
    return (
        <BoardLayout>
            {responsive &&
                <li className='titleArea'>
                    <div>
                        <strong>번호</strong>
                        <strong>브랜드명</strong>
                        <strong>접수일</strong>
                    </div>
                </li>
            }
            <li>
                <div>
                    {responsive &&
                        <strong>5</strong>
                    }
                    <p>하노이 맥주밤거리</p>
                    <time>2023.12.23</time>
                </div>
            </li>
            <li>
                <div>
                    {responsive &&
                        <strong>4</strong>
                    }
                    <p>지금 보고싶다</p>
                    <time>2023.12.23</time>
                </div>
            </li>
            <li>
                <div>
                    {responsive &&
                        <strong>3</strong>
                    }
                    <p>하노이 맥주밤거리</p>
                    <time>2023.12.23</time>
                </div>
            </li>
            <li>
                <div>
                    {responsive &&
                        <strong>2</strong>
                    }
                    <p>오봉집</p>
                    <time>2023.12.23</time>
                </div>
            </li>
            <li>
                <div>
                    {responsive &&
                        <strong>1</strong>
                    }
                    <p>하노이 맥주밤거리</p>
                    <time>2023.12.23</time>
                </div>
            </li>
        </BoardLayout>
    );
}

