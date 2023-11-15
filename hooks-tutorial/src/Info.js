import {useState, useEffect, useReducer} from 'react';
/**
 * 리듀서의 장점은 컴포넌트 업데이트 로직을 바깥으로 빼낼수 있다는 점이다.
 * @param {*} state 현재 가리키고 있는 상태
 * @param {*} action 액션을 발생시키는 함수
 * @returns 
 */
const reducer = (state, action) => {
    return {
        //반드시 불변성을 지켜주면서 반환해야 한다.
        ...state,
        [action.name]: action.value
    }
}

const Info = () => {
    // const [name, setName] = useState('');
    // const [nickname, setNickname] = useState('');
    // useEffect의 두번째 파라미터는 감시할 대상. 그것에 변경이 일어날때만 호출된다.
    // useEffect(() => {
    //     console.log('렌더링 완료!', {name, nickname});
    //     return () => {
    //         console.log('clean up', name)
    //     }
    // }, [])

    // const onChangeName = (e) => {
    //     setName(e.target.value);
    // }

    // const onChangeNickname = (e) => {
    //     setNickname(e.target.value);
    // }
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: ''
    })
    const {name, nickname} = state;
    const onChange = e => {
        // 인자 값을 넣고 호출하면 리듀서함수가 호출된다. 즉 여기서는 e.target이 reducer(state, action)중 action으로 들어가는것.
        dispatch(e.target);
    }


    return (
        <>
            <div>
                <input name='name' onChange={onChange} value={name}/>
                <input name='nickname' onChange={onChange} value={nickname}/>
            </div>
            <div>
                <div>이름: {name}</div>
                <div>닉네임: {nickname}</div>
            </div>
        </>
    )
}

export default Info;