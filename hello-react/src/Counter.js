import {Component} from 'react';
class Counter extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         number: 0
    //     }
    // }
    state = {
        number: 0
    }

    render() {
        const { number } = this.state;
        return (
            <>
                <h1>
                    {number}
                </h1>
                <div>
                    <button onClick={ () => {
                        this.setState((prevState) => {
                            /** 이전상태의 값을 증가시키기위해선 함수를 this.setState에 넘겨준다. this.setState가 비동기이기때문에 바로 바뀌지않는다. */
                            return {
                                number: prevState.number + 1
                            }
                        }, () => {
                            console.log('this.setState 호출 완료!')
                        });
                        this.setState((prevState) => ({number : prevState.number + 1}));
                    }}>+</button>
                </div>
            </>
        )
    }

}

export default Counter;