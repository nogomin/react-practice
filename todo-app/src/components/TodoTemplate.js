import './TodoTemplate.scss';
//children은 컴포넌트 태그 사이의 내용을 보여준다. 텍스트뿐아니라 컴포넌트들 자체를 보여줌으로 children이 없다면 <TodoTemplate>하위에 있는 요소들은 어떤것도 보이지 않는다.
const TodoTemplate = ({children}) => {
    return (
        <div className="TodoTemplate">
            <div className="app-title">일정 관리</div>
            <div className="content">{children}</div>
        </div>
    )
}

export default TodoTemplate;