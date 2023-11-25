import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
    // navigate는 함수로 페이지를 호출할수 있다. 또한 replace옵션이 있어서 기록을 안남길수도 있다. 주로 어떤 조건이 있을때 사용하면 좋다. 
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    const goArticles = () => {
        // replace를 true로 하면 현재 페이지를 페이지 기록에 남기지 않는다.
        navigate('/articles', {replace: true});
    }
    return (
        <div>
            <header style={{background: 'lightgray', padding: 16, fontSize: 24}}>
                <button onClick={goBack}>뒤로가기</button>
                <button onClick={goArticles}>게시글 목록</button>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;