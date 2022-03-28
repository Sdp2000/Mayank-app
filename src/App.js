import logo from './auux1-ps41m.svg';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <marquee direction="left" scrollAmount="90">
          <img src={logo} className="App-logo" alt="logo" />
          <p style={{ marginTop: "50px" }}>
            Mayank Chutiya
          </p>
        </marquee>
        <div className="container">
          <img src={logo} className="App-logo" alt="logo" />
          <p style={{ marginTop: "50px" }}>
            Mayank Bhosdiwala
          </p>
        </div>
        <marquee direction="right" scrollAmount="90">
          <img src={logo} className="App-logo" alt="logo" />
          <p style={{ marginTop: "50px" }}>
            Mayank Jhaatu
          </p>
        </marquee>
      </header>
    </div>
  );
}

export default App;
