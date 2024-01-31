import { Routes, Route, Link, BrowserRouter as Router  } from 'react-router-dom';
import Home from './pages/Home';
import Task from './pages/Tasks';
import './App.css';

function App() {
  return (
  <Router>
     <div>
      <nav>
      
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task" element={<Task />} />
      </Routes>
    </div>
  </Router>
  );
}




export default App;
