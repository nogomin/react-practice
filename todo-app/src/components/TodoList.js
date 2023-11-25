import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import './TodoList.scss';
import TodoListItem from './TodoListItem';

const TodoList = ({todos, onRemove, onToggle}) => {
    const rowRenderer = useCallback(
        ({index, key, style}) => {
            const todo = todos[index];
            return (
                <TodoListItem 
                    todo={todo}
                    key={key}
                    onRemove={onRemove}
                    onToggle={onToggle}
                    style={style}
                />
            );
        },
        [onRemove, onToggle, todos],
    )
    return (
        // <div className='TodoList'>
        //     {todos.map(todo => (
        //         <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle}/>
        //     ))}
        // </div>
        <List 
            className="TodoList"
            width={512} // 전체 크기
            height={513} // 전체 높이
            rowCount={todos.length}
            rowHeight={57} //항목의 높이. 테두리까지 계산해야하므로 두번째 리스트항목을 기준으로 잡는다.
            rowRenderer={rowRenderer}
            list={todos}
            style={{ outline: 'none'}} // List에 기본 적용되는 outline 스타일 제거
        />
    )
}
// 현재 TodoList는 오직 todos 배열이 업데이트 될때만 리렌더링되는데 App 컴포넌트에 다른 state가 추가될 가능성이 높으므로 미리 최적화함
export default React.memo(TodoList);