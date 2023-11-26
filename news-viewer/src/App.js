import React, { useCallback, useState } from 'react';
import NewList from './components/NewList';
import Categories from './components/Categories';
import {Route, Routes} from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback(category => setCategory(category), [])
  // return (
  //   <>
  //     <Categories onSelect={onSelect} category={category}/>
  //     <NewList category={category}/>
  //   </>
  // )
  return (
    <Routes>
      <Route path='/' element={<NewsPage />} />
      <Route path='/:category' element={<NewsPage />}/>
    </Routes>
  )
};

export default App;