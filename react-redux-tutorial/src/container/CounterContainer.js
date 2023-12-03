import React, { useCallback } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = () => {
    const number = useSelector(state => state.counter.number);
    const dispatch = useDispatch();
    // 숫자가 바뀌어서 컴포넌트가 리렌더링될 때마다 onIncrease, onDecrease 함수가 새롭게 만들어지는걸 방지하려면 useCallback
    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
    return (
        <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
    )
}

export default CounterContainer;

// const mapStateToProps = state => ({
//     number: state.counter.number
// });
// const mapDispatchToProps = dispatch => ({
//     increase: () => {
//         // console.log('increase')
//         dispatch(increase());
//     },
//     decrease: () => {
//         // console.log('decrease')
//         dispatch(decrease());
//     }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
// 간결한 버전. mapDispatchToProps에 함수형태가 아닌 액션 생성함수로 이루어진 객체 형태로 넣어주면 connect함수가 내부적으로 bindActionCreators 작업 대신해줌
// export default connect(
//     state => ({
//         number: state.counter.number
//     }),
//     {
//         increase,
//         decrease
//     }
// )(CounterContainer)