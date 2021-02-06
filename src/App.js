import './App.css';

import Converter from "./components/Converter"

function App() {
  return (
    <div className="App">
      <Converter currencyA="CAD" currencyB="BRL"></Converter>
    </div>
  );
}

export default App;
