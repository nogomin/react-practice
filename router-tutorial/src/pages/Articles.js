import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Articles = () => {
    return (
        <div>
            {/* Route의 children으로 들어가는 JSX element가 보이도록 한다. 여기서는 <Route path=':id' element={ <Article />} /> 내용이 보인다 */}
            <Outlet />
            <ul>
                <li>
                    <Link to="/articles/1">게시글 1</Link>
                </li>
                <li>
                    <Link to="/articles/2">게시글 2</Link>
                </li>
                <li>
                    <Link to="/articles/3">게시글 3</Link>
                </li>
            </ul>
        </div>
    );
};

export default Articles;