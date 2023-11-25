import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const About = () => {
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const detail = searchParams.get('detail');
    const mode = searchParams.get('mode');
    
    const onToggleDetail = () => {
        // 쿼리파람 조회시 무조건 문자열 타입이다.
        setSearchParams({mode, detail: detail === 'true' ? false: true});
    }
    const onIncreaseMode = () => {
        // 조회 시 쿼리파람이 존재하지 않으면 null로 조회됨
        const nextMode = mode === null ? 1: parseInt(mode) + 1;
        setSearchParams({mode: nextMode, detail});
    }
    return (
        <div>
            <h1>소개</h1>
            <p>About 페이지</p>
            <p>qs : {location.search}</p>
            <p>detail: {detail}</p>
            <p>mode: {mode}</p>
            <button onClick={onToggleDetail}>Toggle detail</button>
            <button onClick={onIncreaseMode}>mode + 1</button>
        </div>
    );
};

export default About;