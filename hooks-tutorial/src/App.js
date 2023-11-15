import {useState} from 'react';
import Info from './Info';

const App = () => {
  const [visible, setVisible] = useState(false);

  const onToggle = () => {
    setVisible(!visible);
  }

  return (
    <div>
      <div><button onClick={onToggle}>{visible ? '숨기기' : '보이기'}</button></div>
      <hr />
      <div>{visible && <Info />}</div>
    </div>
  );
}

export default App;
