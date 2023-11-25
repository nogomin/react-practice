import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Articles from './pages/Articles';
import Article from './pages/Article';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import MyPage from './pages/MyPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={ <Layout />}>
          <Route path='/' element={ <Home />}/>
          <Route path='/about' element={ <About />}/>
          <Route path='/profiles/:username' element={<Profile/>} />
        </Route>
        <Route path='/articles' element={ <Articles />}>
          <Route path=':id' element={ <Article />} />
        </Route>
        <Route path='/login' element={ <Login />}/>
        <Route path='/mypage' element={ <MyPage />}/>
        {/* *는 아무 텍스트나 매칭한다는 의미이다. 이 라우트 엘리먼트의 상단에 위치하는 라우트들의 규칙을 모두 확인하고 일치하는게 없다면 이 라우트가 화면에 뜬다 */}
        <Route path='*' element={ <NotFound />} />
      </Routes>
    </div>
  );
};

export default App;