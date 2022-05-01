import './App.css';
import { FaReact } from 'react-icons/fa';
import { MdAlarmAdd } from 'react-icons/md';
import { IconContext } from 'react-icons';

function App() {
  return (
    <IconContext.Provider value={{ color: 'blue', size: '5rem' }}>
      <div className="App">
        {/* <FaReact color="purple" size="10rem"></FaReact>
        <MdAlarmAdd color="purple" size="10rem"></MdAlarmAdd> */}
        <FaReact></FaReact>
        <MdAlarmAdd></MdAlarmAdd>
      </div>
    </IconContext.Provider>
  );
}

// IconContext.Provider로 style 속성을 한번에 지정해줄 수 있다.
// 직접 아이콘에 선언해서 overrid할 수 도 있다.

export default App;
