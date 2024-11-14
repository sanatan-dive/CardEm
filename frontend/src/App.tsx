import  { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar'; // Import the Sidebar component
import Hero from './components/Hero'; // Import the Hero section
import Rules from './components/Rules'; // Import the Rules section

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true); // State for sidebar open/close

  return (
    <Router>
      <div className="flex">
        {/* Pass setIsSidebarOpen as a prop to Sidebar */}
        <Sidebar setIsSidebarOpen={setIsSidebarOpen} />
        
        {/* Main Content */}
        <div className={`ml-${isSidebarOpen ? "64" : "20"} w-full`}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/rules" element={<Rules />} />
            <Route path='*' element={<h1 className='text-white'>404</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
