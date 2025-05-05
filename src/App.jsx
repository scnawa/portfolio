import './App.css';
import Sidebar from './Components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Projects from './Pages/Projects';
import LandingPage from './Pages/LandingPage';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
