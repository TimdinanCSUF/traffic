import logo from './logo.svg';
import './App.css';
import words from './words.svg';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={words} className="App-title" alt="words" />
        <p>
          automate your social media
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          sign up

        </a>
      </header>
    </div>
  );
}

export default App;
