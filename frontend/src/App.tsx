
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Hero';
import Rules from './components/Rules';
// import NotFound from './NotFound';  // For handling undefined routes

function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes */}
        <Route path="/" element={<Home />} />
        <Route path="/rules" element={<Rules />} />
        
        {/* Catch-all route for undefined pages */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
