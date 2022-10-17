import './App.css';
import StepContext from "./context/step.context";
import StepComponent from "./hook/StepComponent";

function App() {
  return (
      <StepContext>
        <section className="App">
            <StepComponent />
        </section>
      </StepContext>
  );
}

export default App;
