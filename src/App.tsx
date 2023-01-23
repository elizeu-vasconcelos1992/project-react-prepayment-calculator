import "./App.css";
import Main from "./components/Main";
import CalculatorProvider from "./context/CalculatorContext";

function App() {
  return (
    <CalculatorProvider>
      <div className='App'>
        <Main />
      </div>
    </CalculatorProvider>
  );
}

export default App;
