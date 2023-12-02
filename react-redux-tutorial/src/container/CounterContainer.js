import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({number, increase, decrease}) => {
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    )
}

const mapStateToProps = state => ({
    number: state.counter.number
});
const mapDispatchToProps = dispatch => ({
    increase: () => {
        // console.log('increase')
        dispatch(increase());
    },
    decrease: () => {
        // console.log('decrease')
        dispatch(decrease());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
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