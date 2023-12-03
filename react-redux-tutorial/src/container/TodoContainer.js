import React, { useCallback } from 'react';
import Todos from '../components/Todos';
import { connect, useDispatch, useSelector } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import { useActions } from '../lib/useActions';

const TodoContainer = () => {
    const {input, todos} = useSelector(({todos}) => ({
        input: todos.input,
        todos: todos.todos
    }))
    // const dispatch = useDispatch();
    // const onChangeInput = useCallback((input) => dispatch(changeInput(input)), [dispatch]);
    // const onInsert = useCallback(text => dispatch(insert(text)), [dispatch]);
    // const onToggle = useCallback(id => dispatch(toggle(id)), [dispatch]);
    // const onRemove = useCallback(id => dispatch(remove(id)), [dispatch]);

    // useAction Hook은 공식 지원은 아니지만 유용한 recipe임. 액션 생성 함수를 디스패치하는 함수로 변환해준다.
    // useActions(액션생성함수로 이뤄진 배열, dep)
    const [onChangeInput, onInsert, onToggle, onRemove] = useActions([changeInput, insert, toggle, remove], []);
    return (
        <Todos 
            input={input}
            todos={todos}
            onChangeInput={onChangeInput}
            onInsert={onInsert}
            onToggle={onToggle}
            onRemove={onRemove}
        />
    );
};
/**
 * connect함수를 사용했다면 해당 컨테이너 컴포넌트의 props가 바뀌지않으면 리렌더링이 자동으로 방지되지만 useSelector는 그렇지 않다. React.memo로 감싸줘야함
 */
export default TodoContainer;

// export default connect(({todos}) => ({
//     input: todos.input,
//     todos: todos.todos
// }), {
//     changeInput,
//     insert,
//     toggle,
//     remove
// })(TodoContainer);