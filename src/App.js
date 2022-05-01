import './App.css';
import Modal from 'react-modal';
import { useState } from 'react';

Modal.setAppElement('#root'); // console 창 에러 없애기 위해서

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setModalIsOpen(true)}>open modal</button>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: 'gray',
          },
          content: {
            color: 'orange',
          },
        }}
      >
        <h2>Modal title</h2>
        <p>Modal body</p>
        <button onClick={() => setModalIsOpen(false)}>close modal</button>
      </Modal>
    </div>
  );
}

export default App;

/**
 
shouldCloseOnOverlayClick -> over lay 부분, 즉 modal 이외의 부분 눌러도 반응안한다 
shouldCloseOnOverlayClick={false} onRequestClose={() => setModalIsOpen(false)}
이렇게 두면 overlay 부분 눌러도 모달 닫히지 않지만, esc 누르면 모달 닫힌다
 */
