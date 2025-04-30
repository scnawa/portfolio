import './App.css';
import Sidebar from './Components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Projects from './Pages/Projects';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <h1>Main Area</h1>
        <Routes>
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
