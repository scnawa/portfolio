import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Projects from './Pages/Projects'
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <h1>Main Area</h1>
      </main>
    </div>
  );
}

export default App;
