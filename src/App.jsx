import { Header } from "./components/header/header";
import { Output } from "./components/output/output";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="calculater-container">
          <Header />
          <Output />
        </div>
      </div>
    </>
  );
}

export default App;
