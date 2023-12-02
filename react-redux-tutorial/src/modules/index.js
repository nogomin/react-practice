import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

// createStore함수를 사용해 스토어를 만들때는 reducer가 하나여야한다. 그래서 리듀서를 하나로 합쳐주는 역할이 필요
const rootReducer = combineReducers({
    counter,
    todos
})

export default rootReducer;