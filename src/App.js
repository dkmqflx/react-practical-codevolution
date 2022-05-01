import './App.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

// toast를 컴포넌트로 customize 할 수 있다
const CustomToast = ({ closeToast }) => {
  return (
    <div>
      Something went wrong
      <button onClick={closeToast}>close</button>
    </div>
  );
};

function App() {
  const notify = () => {
    toast(`Basic notification`, {
      position: toast.POSITION.TOP_LEFT,
    });
    toast.success(`Basic notification`, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 8000,
    });
    toast.info(`Basic notification`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: false,
    });
    toast.warn(<CustomToast />, {
      position: toast.POSITION.BOTTOM_LEFT,
    });
    toast.error(`Basic notification`, {
      position: toast.POSITION.BOTTOM_CENTER,
    });
    toast(`Basic notification`, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };
  return (
    <div className="App">
      <button onClick={notify}>Notify </button>
    </div>
  );
}

// IconContext.Provider로 style 속성을 한번에 지정해줄 수 있다.
// 직접 아이콘에 선언해서 overrid할 수 도 있다.

export default App;
