import {useState} from 'react';
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트 공부',
      checked: true
    },
    {
      id: 2,
      text: 'ts 공부',
      checked: true
    },
    {
      id: 3,
      text: '헬스 가기',
      checked: false
    }
  ])
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos}/>
    </TodoTemplate>
  )
}

export default App;