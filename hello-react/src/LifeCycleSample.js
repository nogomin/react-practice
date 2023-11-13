import { Component } from "react";

class LifeCycleSample extends Component {
    state = {
        number: 0,
        color: null
    }

    myRef = null;

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    // props로 받아온 값을 state에 동기화시키는 용도. 마운트될때와 업데이트될때 호출됨
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps', nextProps, prevState);
        if(nextProps.color !== prevState.color) {
            return {color: nextProps.color};
        }
        return null;
    }

    // 컴포넌트를 만들고 첫 렌더링을 다 마친 후 실행. 이벤트 등록, setTimeout, setInterval, 네트워크 요청 등
    componentDidMount() {
        console.log('componentDidMount');
    }

    // props 또는 state 변경했을 때, 리렌더링을 시작할지 여부를 지정하는 메서드. 반드시 true, false를 반환해야함. default는 true
    // 현재 props와 state는 this.props, this.state로 접근. 새로 설정될 props 또는 state는 nextProps, nextState로 접근
    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate', nextProps, nextState);
        return nextState.number % 10 !== 4;
    }

    // 컴포넌트를 DOM에서 제거할 때 실행. 등록한 이벤트, 타이머 등을 여기서 제거
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    // render에서 만들어진 결과물이 브라우저에 적용되기 직전에 호출. 이 메서드의 반환값은 componentDidUpdate의 snapshot 파라미터로 전달받을수 있음
    // 주로 업데이트하기 직전의 값을 참고할 일이 있을 때 활용됨. (예: 스크롤바 위치 유지)
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        if(prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }

    // 리렌더링을 완료한 후 실행됨. prevProps 또는 prevState를 사용해서 컴포넌트가 이전에 가졌던 데이터에 접근할 수 있음. 
    // getSnapshotBeforeUpdate에서 반환한 값이 있다면 snapshot값을 전달받을 수 있음.
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState);
        if(snapshot) {
            console.log('업데이트 되기 직전 색상 :', snapshot);
        }
    }

    render() {
        console.log('render');

        const style = {
            color: this.props.color
        }

        return (
            <div>
                <h1 style={style} ref={ref => this.myRef = ref}>
                    {this.state.number}
                </h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>더하기</button>
            </div>
        )
    }
}

export default LifeCycleSample