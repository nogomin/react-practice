import { useRef, useState } from "react";

const IterationSample = () => {
    const [names, setNames] = useState([
        {id: 1, text: '똘기'},
        {id: 2, text: '떵이'},
        {id: 3, text: '호치'},
        {id: 4, text: '새촘이'},
    ])
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const inputRef = useRef();
    
    const onChange = (e) => {
        setInputText(e.currentTarget.value);
    }

    const onClick = (e) => {
        /**
         * push가 아닌 map을 사용하는 이유는 불변성을 지키기 위해서다.
         * 리액트는 상태 업데이트를 할때 얕은 비교를 수행한다. 그래서 이전 참조값과 현재 참조값만을 비교하여 상태변화를 감지한다. 
         * 또한 불변성을 지킴으로서 원본 데이터를 건들이지 않을수 있어서 사이드 이펙트를 방지 할수 있다.
         */
        const newItem = names.map({id: nextId, text: inputText});
        setNames(newItem);
        setNextId(nextId + 1);
        setInputText('');
        inputRef.current.focus();
    }

    const onRemove = (id) => {
        const removeItem = names.filter(name => name.id !== id);
        setNames(removeItem);
    }

    const namesList = names.map((name) => <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>);
    return (
        <div>
            <input type="text" onChange={onChange} value={inputText} ref={inputRef}/>
            <button onClick={onClick}>추가</button>
            <ul>{namesList}</ul>
        </div>
    )
}

export default IterationSample;