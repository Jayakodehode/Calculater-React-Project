import { Output } from "./components/output/output";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="calculater-container">
          <div className="header">
            <h1>Calc</h1>
            <div className="color-theme">
              <h4>THEME</h4>
              <div className="toogle-container">
                <div className="toogle-numbers">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                </div>

                <div class="theme-change">
                  <div class="btn theme-1 active">1</div>
                  <div class="btn theme-2">2</div>
                  <div class="btn theme-3">3</div>
                </div>
              </div>
            </div>
          </div>

          <Output />
        </div>
      </div>
    </>
  );
}

export default App;
