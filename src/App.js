import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
