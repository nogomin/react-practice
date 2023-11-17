import {useState, useMemo, useCallback, useRef} from 'react';
/**
 * useMemo와 useCallback은 메모이제이션 기법을 활용한 최적화 방법이다. 
 * https://velog.io/@khy226/useMemo%EC%99%80-useCallback-%ED%9B%91%EC%96%B4%EB%B3%B4%EA%B8%B0
 * 
 */
const getAverage = (numbers) => {
    console.log('평균값 계산중...');
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a + b);
    const avg = sum / numbers.length;
    return avg;
}

const Average = () => {
    const [number, setNumber] = useState('');
    const [list, setList] = useState([]);

    const inputEl = useRef(null);

    const onChange = useCallback((e) => {
        setNumber(e.target.value)
    }, [])

    const onInsert = useCallback(() => {
        const newList = list.concat(Number(number));
        setList(newList);
        setNumber('');
        inputEl.current.focus();
    }, [number, list])

    const avg = useMemo(() => getAverage(list), [list])
    

    return (
        <div>
            <div><input onChange={onChange} value={number} ref={inputEl} /><button onClick={onInsert}>등록</button></div>
            <div>
                <ul>
                    {list.map((v, index) => <li key={index}>{v}</li>)}
                </ul>
                <b>평균값: {avg}</b>
            </div>
        </div>
    )
}

export default Average;