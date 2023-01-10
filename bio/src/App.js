
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Setup from './Setup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/bio" element={<Home/>} />
        <Route path="/setup" element={<Setup/>} />
      </Routes>
    </Router>
  );
}

export default App;
