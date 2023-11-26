import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';
import styled from 'styled-components';
import usePromise from '../lib/usePromise';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 758px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`
const sample = {
    title: '제목',
    desciption: '내용',
    url: 'https://google.com',
    urlToImage: 'https://via.placeholder.com/160'
}

const NewList = ({category}) => {
    // const [articles, setArticles] = useState(null);
    // const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     // useEffect에 등록하는 함수에 async를 붙이면 안된다. useEffect에서 반환해야 하는 값은 뒷정리함수이다. 즉, async를 사용하는 함수를 따로 선언해줘야한다.
    //     const fetchData = async () => {
    //         setLoading(true);
    //         try {
    //             const query = category === 'all' ? '' : `&category=${category}`
    //             const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=4c52df93393e448994fbca026fd221b9`);
    //             console.log(response)
    //             setArticles(response.data.articles);
    //         } catch (e) {
    //             throw new Error(e);
    //         }
    //         setLoading(false);
    //     }
    //     fetchData();
    // }, [category])
    
    const [loading, response, error] = usePromise(() => {
        const query = category === 'all' ? '' : `&category=${category}`
        return axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=4c52df93393e448994fbca026fd221b9`);
    }, [category])
    

    if(loading) {
        return <NewsListBlock>대기중...</NewsListBlock>
    }

    // 만약 데이터가 없다면 밑에 map을 순회할때 오류가 발생한다.
    // if(!articles) {
    //     return null;
    // }
    if (!response) {
        return null;
    }

    if(error) {
        return <NewsListBlock>에러 발생!</NewsListBlock>
    }

    const {articles} = response.data;
    return (
        <NewsListBlock>
            {articles.map(article => <NewsItem article={article} />)}
        </NewsListBlock>
    );
};

export default NewList;