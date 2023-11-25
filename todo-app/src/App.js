import {useState, useRef, useCallback} from 'react';
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

function createBulkTodos() {
  const array = [];
  for(let i = 1; i <= 5000; i++) {
    array.push({
      id: i,
      text: `할일 ${i}`,
      checked: false
    })
  }
  return array;
}

const App = () => {
  const [todos, setTodos] = useState(createBulkTodos)

  const nextId = useRef(5001);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false
    }
    // 함수형 업데이트 e.g) setNumber(prevNumber => prevNumber + 1)
    setTodos(todos => todos.concat(todo));
    nextId.current += 1;
  }, [todos]);

  const onRemove = useCallback((id) => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }, [todos])

  const onToggle = useCallback((id) => {
    setTodos(todos => todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo));
  }, [todos])

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  )
}

export default App;