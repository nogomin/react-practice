import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const Articles = () => {
    // const activeStyle = {
    //     color: 'green',
    //     fontSize: 21
    // }
    return (
        <div>
            {/* Route의 children으로 들어가는 JSX element가 보이도록 한다. 여기서는 <Route path=':id' element={ <Article />} /> 내용이 보인다 */}
            <Outlet />
            <ul>
                {/* <li>
                    <NavLink to="/articles/1" style={({isActive}) => (isActive ? activeStyle : undefined)}>게시글 1</NavLink>
                </li>
                <li>
                    <NavLink to="/articles/2" style={({isActive}) => (isActive ? activeStyle : undefined)}>게시글 2</NavLink>
                </li>
                <li>
                    <NavLink to="/articles/3" style={({isActive}) => (isActive ? activeStyle : undefined)}>게시글 3</NavLink>
                </li> */}
                <ArticleItem id={1}/>
                <ArticleItem id={2}/>
                <ArticleItem id={3}/>
            </ul>
        </div>
    );
};

const ArticleItem = ({id}) => {
    const activeStyle = {
        color: 'green',
        fontSize: 21
    }
    return (
        <li>
            {/** NavLink 컴포넌트는 링크에서 사용하는 경로가 현재 라우트의 경로와 일치하면 특정스타일 또는 css 클래스를 적용해 준다. */}
            <NavLink to={`/articles/${id}`} style={({isActive}) => (isActive ? activeStyle : undefined)}>게시글 {id}</NavLink>
        </li>
    ) 
}

export default Articles;