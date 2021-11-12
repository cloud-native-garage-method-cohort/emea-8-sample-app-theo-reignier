import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Theo Reignier's app.
          This project is part of the Cloud Native Bootcamp.
        </p>
        <a
          className="App-link"
          href="https://github.com/cloud-native-garage-method-cohort/emea-8-sample-app-theo-reignier"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub repository
        </a>
      </header>
    </div>
  );
}

export default App;
