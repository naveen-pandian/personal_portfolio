import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
    return (
        <Router basename="/personal_portfolio/client">
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/:user" element={<Home />} /> */}
        </Routes>
    </Router>
    );
}

export default App;