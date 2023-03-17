import React from 'react';
import { Link } from 'react-router-dom';

export default function AppLink() {
    return (
        <div>
            <p>궁금한 점이 있으신가요? 전문가와 직접 상담해 보세요!</p>
            <Link>앱에서 1:1 채팅하기</Link>
        </div>
    );
}

