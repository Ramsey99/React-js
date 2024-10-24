import logo from './logo.svg';
import './App.css';
import Count from './Hooks/useState/count';
import Color from './Hooks/useState/Color';
import Buttoncolor from './Hooks/useState/Buttoncolor';
import Counter from './Hooks/useReducer/Counter';
import ColorChange from './Hooks/useReducer/ColorChange';

function App() {
  return (
    <div className="App">
      {/* <Count/>
      <Color/>
      <Buttoncolor/> */}
      {/* <Counter/> */}
      <ColorChange/>
    </div>
  );
}

export default App;
