import logo from './logo.svg';
import './App.css';
import BmiCalculator from './Component/BmiCalculator';
import BmrCalculator from './Component/BmrCalculator';

function App() {
  return (
    <div className="App">
      <BmiCalculator/>
      <BmrCalculator/>
    </div>
  );
}

export default App;
