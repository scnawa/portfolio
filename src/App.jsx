import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Projects from './Projects';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/" className="App-link">Home</Link> |{" "}
            <Link to="/projects" className="App-link">Projects</Link>
          </nav>

          <Routes>
              <Route path="/" element={
                <>
                  <img src={require('./logo.svg').default} className="App-logo" alt="logo" />
                  <p>Edit <code>src/App.js</code> and save to reload.</p>
                </>
              } />
              <Route path="/projects" element={<Projects />} />
            </Routes>

        </header>
      </div>
    </Router>
  );
}

export default App;
