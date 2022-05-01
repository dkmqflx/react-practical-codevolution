import './App.css';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';
import { forwardRef } from 'react';

const ColoredTooltip = () => {
  return <span style={{ color: 'yellow' }}>Colored Component</span>;
};

// customize component 사용하기 위해서는 forwardRef 사용해야 한다.
const CustomChild = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div>First line</div>
      <div>Second line</div>
    </div>
  );
});

function App() {
  return (
    <div className="App">
      <div style={{ paddingBottom: '20px' }}>
        <Tippy placement="right" arrow={false} delay={1000} content="Basic Tooltip">
          <button>Hover</button>
        </Tippy>
      </div>

      <div style={{ paddingBottom: '20px' }}>
        <Tippy content={<span style={{ color: 'orange' }}> Colered</span>}>
          <button>Hover</button>
        </Tippy>
      </div>

      <div style={{ paddingBottom: '20px' }}>
        <Tippy content={<ColoredTooltip></ColoredTooltip>}>
          <button>Hover</button>
        </Tippy>
      </div>

      <div style={{ paddingBottom: '20px' }}>
        <Tippy placement="top-start" content={<ColoredTooltip></ColoredTooltip>}>
          <CustomChild></CustomChild>
        </Tippy>
      </div>
    </div>
  );
}

export default App;
